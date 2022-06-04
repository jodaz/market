<?php

namespace App\Http\Controllers;

use App\Models\Cubicle;
use Illuminate\Http\Request;

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

            if (array_key_exists('num', $filters)) {
                $query->whereLike('num', $filters['num']);
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cubicle  $cubicle
     * @return \Illuminate\Http\Response
     */
    public function show(Cubicle $cubicle)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cubicle  $cubicle
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cubicle $cubicle)
    {
        //
    }
}
