<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TaxpayersCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'rif' => 'required|min:8|unique:taxpayers',
            'name' => 'required',
            'address' => 'required',
            'phone' => 'min:14|unique:taxpayers',
        ];
    }

    public function messages()
    {
        return [
            'rif.required' => 'Ingrese el RIF',
            'rif.unique' => 'El RIF ingresado ya ha sido registrado',
            'name.required' => 'Ingrese el nombre',
            'address.required' => 'Ingrese la dirección',
            'phone.min' => 'El número de teléfono es muy corto',
            'phone.unique' => 'El número de teléfono está registrado',
        ];
    }
}
