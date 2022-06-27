<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UsersCreateFormRequest extends FormRequest
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
            'identity_card' => 'required|unique:users',
            'names' => 'required',
            'password' => 'required',
            'surnames' => 'required',
            'login' => 'required|unique:users'
        ];
    }

    public function attributes()
    {
        return [
            'identity_card' => 'número de cédula',
            'names' => 'primer nombre',
            'password' => 'contraseña',
            'surnames' => 'apellidos',
            'login' => 'login',
        ];
    }

    public function messages()
    {
        return [
            'identity_card.required' => 'Ingrese el :attribute',
            'first_name.required' => 'Ingrese el :attribute',
            'password.required' => 'Ingrese la :attribute',
            'surname.required' => 'Ingrese el :attribute',
            'login.required' => 'Ingrese el :attribute',
            'identity_card.unique' => 'El :attribute se encuentra en uso',
            'login.unique' => 'El :attribute se encuentra en uso',
        ];
    }
}
