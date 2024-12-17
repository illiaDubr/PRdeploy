<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PersonalAccessTokenController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});


//Route::post('/search-players', [\App\Http\Controllers\PlayerController::class, 'search']);

Route::controller(\App\Http\Controllers\PlayerController::class)
    ->prefix('search-players')
    ->group(function (){
        Route::post('', [\App\Http\Controllers\PlayerController::class, 'search'])->middleware('auth:sanctum');
});


Route::post('/personal-access-tokens', [PersonalAccessTokenController::class, 'token']);
Route::delete('/personal-access-tokens', [PersonalAccessTokenController::class, 'destroy'])->middleware('auth:sanctum');


Route::controller(\App\Http\Controllers\UserController::class)->group(function (){
   Route::post('login','login')->name('login');
});
