<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Player;
use Illuminate\Http\Request;

class PlayerController extends Controller
{
    public function search(Request $request)
    {
        // Достаём параметры запроса
        $first_name   = $request->input('first_name');
        $last_name    = $request->input('last_name');
        $middle_name  = $request->input('middle_name');
        $discord      = $request->input('discord');
        $phonenumber = $request->input('phonenumber');
        $email        = $request->input('email');
        $nickname     = $request->input('nickname');

        $results = Player::query()
            ->when($first_name, function ($query, $first_name) {
                return $query->where('first_name', 'like', '%' . $first_name . '%');
            })
            ->when($last_name, function ($query, $last_name) {
                return $query->where('last_name', 'like', '%' . $last_name . '%');
            })
            ->when($middle_name, function ($query, $middle_name) {
                return $query->where('middle_name', 'like', '%' . $middle_name . '%');
            })
            ->when($discord, function ($query, $discord) {
                return $query->where('discord', 'like', '%' . $discord . '%');
            })
            ->when($phonenumber, function ($query, $phonenumber) {
                return $query->where('phonenumber', 'like', '%' . $phonenumber . '%');
            })
            ->when($nickname, function ($query, $nickname) {
                // Проверка никнейма по нескольким столбцам
                return $query->where(function ($q) use ($nickname) {
                    $q->where('nickPS', 'like', '%' . $nickname . '%')
                        ->orWhere('nickGG', 'like', '%' . $nickname . '%')
                        ->orWhere('nickRedStar', 'like', '%' . $nickname . '%')
                        ->orWhere('nickTigerGaming', 'like', '%' . $nickname . '%')
                        ->orWhere('nickPartyPoker', 'like', '%' . $nickname . '%')
                        ->orWhere('nickPokerstars', 'like', '%' . $nickname . '%')
                        ->orWhere('nick888poker', 'like', '%' . $nickname . '%')
                        ->orWhere('nickWPNpoker', 'like', '%' . $nickname . '%')
                        ->orWhere('nickStretchpoker', 'like', '%' . $nickname . '%')
                        ->orWhere('nickCoinpoker', 'like', '%' . $nickname . '%')
                        ->orWhere('nickchikoPoker', 'like', '%' . $nickname . '%')
                        ->orWhere('nickiPoker', 'like', '%' . $nickname . '%');
                });
            })
            ->when($email, function ($query, $email) {
                return $query->where('email', 'like', '%' . $email . '%');
            })
            ->get();

        if ($results->isEmpty()) {
            return response()->json(['message' => 'User not found'], 200);
        }

        return response()->json($results);
    }
}
