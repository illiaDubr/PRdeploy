<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PersonalAccessTokenController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Auth\LoginController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});


//Route::post('/search-players', [\App\Http\Controllers\PlayerController::class, 'search']);

Route::controller(\App\Http\Controllers\PlayerController::class)
    ->prefix('search-players')
    ->group(function (){
        Route::post('', [\App\Http\Controllers\PlayerController::class, 'search']);
});


Route::post('/personal-access-tokens', [PersonalAccessTokenController::class, 'token']);
Route::delete('/personal-access-tokens', [PersonalAccessTokenController::class, 'destroy'])->middleware('auth:sanctum');


Route::post('/register', [RegisteredUserController::class, 'store'])
    ->middleware('guest')
    ->name('register');

Route::post('/login', [AuthenticatedSessionController::class, 'store'])
    ->middleware('guest')
    ->name('login');
Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->middleware('auth')
    ->name('logout');

// Route::post('/login', [LoginController::class, 'login'])->middleware('guest')->name('login');
// Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth:sanctum')->name('logout');
    


Route::post('/forgot-password', [PasswordResetLinkController::class, 'store'])
    ->middleware('guest')
    ->name('password.email');

Route::post('/reset-password', [NewPasswordController::class, 'store'])
   ->middleware('guest')
    ->name('password.store');

Route::get('/verify-email/{id}/{hash}', VerifyEmailController::class)
    ->middleware(['auth', 'signed', 'throttle:6,1'])
    ->name('verification.verify');

Route::post('/email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
    ->middleware(['auth', 'throttle:6,1'])
    ->name('verification.send');




Route::controller(\App\Http\Controllers\UserController::class)->group(function (){
   Route::post('login','login')->name('login');
});
