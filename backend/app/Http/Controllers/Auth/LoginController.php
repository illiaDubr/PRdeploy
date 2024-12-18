<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    /**
     * Handle an incoming login request.
     */
    public function login(Request $request)
    {
        // Валидация входных данных
        $validated = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        // Пытаемся аутентифицировать пользователя
        if (!Auth::attempt(['email' => $validated['email'], 'password' => $validated['password']], $request->boolean('remember'))) {
            throw ValidationException::withMessages([
                'email' => __('auth.failed'), // Сообщение об ошибке
            ]);
        }

        // Регенерация сессии для безопасности
        $request->session()->regenerate();

        // Возвращаем успешный ответ
        return response()->json([
            'message' => 'Login successful',
            'user' => Auth::user(), // Возвращаем текущего пользователя
        ]);
    }

    /**
     * Handle logout request.
     */
    public function logout(Request $request)
    {
        // Выходим из текущей сессии
        Auth::guard('web')->logout();

        // Инвалидация текущей сессии
        $request->session()->invalidate();

        // Генерация нового токена для CSRF
        $request->session()->regenerateToken();

        return response()->json([
            'message' => 'Logout successful',
        ]);
    }
}
