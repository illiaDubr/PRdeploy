<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\PlayerSData;
use Illuminate\Http\Request;

class PlayerController extends Controller
{
    public function search(Request $request)
    {
        // Получаем данные из запроса
        $name = $request->input('name');
        $surname = $request->input('surname');
        $middle_name = $request->input('middle_name');
        $discord = $request->input('discord');
        $email = $request->input('Email');
        $phonenumber = $request->input('phonenumber');
        $nickname = $request->input('nickname');

        // Строим запрос
        $results = PlayerSData::query()
            ->when($name, function ($query, $name) {
                return $query->where('name', 'like', '%' . $name . '%');
            })
            ->when($surname, function ($query, $surname) {
                return $query->where('surname', 'like', '%' . $surname . '%');
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
            // Проверка никнейма по нескольким полям
            ->when($nickname, function ($query, $nickname) {
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
            // Проверка email по нескольким полям
            ->when($email, function ($query, $email) {
                return $query->where(function ($q) use ($email) {
                    $q->where('mailSkrill', 'like', '%' . $email . '%')
                        ->orWhere('mailNeteller', 'like', '%' . $email . '%')
                        ->orWhere('mailGipsyTeam', 'like', '%' . $email . '%')
                        ->orWhere('mailLuxon', 'like', '%' . $email . '%')
                        ->orWhere('Email', 'like', '%' . $email . '%');
                });
            })
            ->get();

        // Если ничего не найдено или параметры не совпадают
        if ($results->isEmpty()) {
            return response()->json(['message' => 'User not found'], 200);
        }

        // Возвращаем результаты
        return response()->json($results);
    }
}
