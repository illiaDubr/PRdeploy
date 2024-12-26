<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReputationRecord extends Model
{
    use HasFactory;

    protected $fillable = [
        'player_id',
        'backer_id',
        'comment',
        'arbitrage_descr',
        'amount',
        'source',
    ];
}
