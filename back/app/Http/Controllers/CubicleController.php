<?php

namespace App\Http\Controllers;

use App\Models\Cubicle;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Auth;

class CubicleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $query = Cubicle::query();
        $results = $request->perPage;
        $sort = $request->sort;
        $order = $request->order;

        if ($request->has('filter')) {
            $filters = $request->filter;

            if (array_key_exists('address', $filters)) {
                $query->whereLike('address', $filters['address']);
            }
        }

        if ($sort && $order) {
            $query->orderBy($sort, $order);
        }

        return $query->paginate($results);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        foreach($request->cubicles as $cubicle) {
            Cubicle::create([
                'item_id' => $request->item_id,
                'address' => $cubicle->address,
                'created_by' => Auth::user()->id
            ]);
        }

        return response()->json(['success' => true], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cubicle  $cubicle
     * @return \Illuminate\Http\Response
     */
    public function show(Cubicle $cubicle)
    {
        return $cubicle->load('taxpayer');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Cubicle  $cubicle
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cubicle $cubicle)
    {
        $newCubicle = $cubicle->replicate();

        $cubicle->update(['active' => false]);

        $newCubicle->update($request->all());

        return $newCubicle;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cubicle  $cubicle
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cubicle $cubicle)
    {
        $cubicle->update([
            'disincorporated_at' => Carbon::now()
        ]);

        return $cubicle;
    }
}
