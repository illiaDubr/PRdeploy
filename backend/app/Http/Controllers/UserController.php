<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function login(LoginRequest $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        // Попытка аутентификации
        if (Auth::attempt(['email' => $email, 'password' => $password])) {
            // Успешная аутентификация
            $request->session()->regenerate(); // Регенерация сессии

            return response()->json([
                'message' => 'Login successful',
                'user' => Auth::user(), // Возвращаем данные пользователя
            ], 200);
        }

        // Ошибка аутентификации
        return response()->json([
            'message' => 'Invalid credentials',
        ], 401);
    }
}
