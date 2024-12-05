<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});


//Route::post('/search-players', [\App\Http\Controllers\PlayerController::class, 'search']);

// Route::controller(\App\Http\Controllers\PlayerController::class)
//     ->prefix('search-players')
//     ->group(function (){
//         Route::post('', [\App\Http\Controllers\PlayerController::class, 'search']);
// });

Route::controller(\App\Http\Controllers\PlayerController::class)
    ->prefix('api/search-players')
    ->group(function () {
        Route::post('', 'search');
    });

Route::controller(\App\Http\Controllers\UserController::class)->group(function (){
   Route::post('login','login')->name('login');
});
