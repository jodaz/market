@extends('pdf.reports.layouts.template')

@section('content')
<table style="text-align: center">
    <caption>{{ strtoupper($title) }}</caption>
    <thead>
        <tr>
            <th width="5%">#</th>
            <th width="45%">CONTRIBUYENTE</th>
            <th width="20%">DIRECCIÓN</th>
            <th width="30%">NOMBRE</th>
        </tr>
    </thead>
    <tbody>
    @foreach($models as $index => $model)
        <tr>
        <td>{{ $index + 1 }}</td>
        <td>{{ $model->taxpayer->name }}</td>
        <td>{{ $model->address }}</td>
        <td>{{ $model->item->name }}</td>
    </tr>
    @endforeach
</table>
@endsection
