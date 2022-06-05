<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $user = User::where('login', $request->login)->first();

        if (!$user) {
            return response()->json([
                'errors' => [
                    'login' => ['Login incorrecto']
                ]
            ], 401);
        }

        // Check password
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'errors' => [
                    'password' => ['Contraseña incorrecta']
                ]
            ], 401);
        }

        $token = $user->createToken('qwerty123');

        return [
            'token' => $token->plainTextToken,
            'user' => $user
        ];
    }
}
