<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Player extends Model
{
    use HasFactory;

    protected $table = 'players';
    protected $primaryKey = 'player_id';

    public $incrementing = true;
    public $timestamps = true;


    protected $fillable = [
        'user_id',
        'first_name', 'last_name', 'middle_name', 'email',
        'nickPS', 'nickGG', 'nickRedStar', 'nickTigerGaming', 'nickPartyPoker',
        'nickPokerstars', 'nick888poker', 'nickWPNpoker', 'nickStretchpoker',
        'nickCoinpoker', 'nickchikoPoker', 'nickiPoker', 'Skrill', 'Neteller',
        'GipsyTeam', 'Luxon', 'telegram', 'discord', 'phonenumber',
        'kyc_status', 'kyc_verified_at', 'created_by', 'updated_by', 'old_id', 'descr', 'amount', 'fund_name',
    ];
}
