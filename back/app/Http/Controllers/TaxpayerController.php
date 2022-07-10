<?php

namespace App\Http\Controllers;

use App\Models\Taxpayer;
use Illuminate\Http\Request;
use App\Http\Requests\TaxpayersCreateRequest;
use PDF;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class TaxpayerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Taxpayer::latest();
        $results = $request->perPage;
        $sort = $request->sort;
        $order = $request->order;

        if ($request->has('filter')) {
            $filters = $request->filter;

            if (array_key_exists('rif', $filters)) {
                $query->whereLike('rif', $filters['rif']);
            }
            if (array_key_exists('name', $filters)) {
                $query->whereLike('name', $filters['name']);
            }
            if (array_key_exists('phone', $filters)) {
                $query->whereLike('phone', $filters['phone']);
            }
            if (array_key_exists('email', $filters)) {
                $query->whereLike('email', $filters['email']);
            }
            if (array_key_exists('address', $filters)) {
                $query->whereLike('address', $filters['address']);
            }
            if (array_key_exists('id', $filters)) {
                $query->find($filters['id']);
            }
        }

        if ($sort && $order) {
            $query->orderBy($sort, $order);
        }

        if ($request->type == 'pdf') {
            return $this->report($query);
        }

        return $query->paginate($results);
    }

    public function report($query)
    {
        // Prepare pdf
        $models = $query->get();
        $title = "Padrón de contribuyentes";

        $pdf = PDF::LoadView('pdf.reports.taxpayers', compact([
            'models',
            'title'
        ]));

        return $pdf->download();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(TaxpayersCreateRequest $request)
    {
        $taxpayer = Taxpayer::create($request->all());

        return $taxpayer;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Taxpayer  $taxpayer
     * @return \Illuminate\Http\Response
     */
    public function show(Taxpayer $taxpayer)
    {
        return $taxpayer;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Taxpayer  $taxpayer
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Taxpayer $taxpayer)
    {
        $validator = Validator::make($request->all(), [
            'rif' => [
                'required',
                'min:8',
                Rule::unique('taxpayers')->ignore($taxpayer->id),
            ],
            'name' => 'required',
            'address' => 'required'
        ], [
            'name.required' => 'Ingrese el nombre',
            'address.required' => 'Ingrese la dirección',
            'rif.required' => 'Ingrese el RIF',
            'rif.unique' => 'El RIF ingresado ya se encuentra registrado.',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 422);
        }

        return response()->json($taxpayer, 200);
    }
}
