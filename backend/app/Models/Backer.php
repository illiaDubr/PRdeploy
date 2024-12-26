<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Backer extends Model
{
    use HasFactory;

    protected $primaryKey = 'backer_id'; // Указываем нестандартный ключ
    protected $fillable = [
        'user_id',
        'name',
        'managers',
        'users',
        'readonlys',
        'email',
        'old_backer',
    ];

    protected $casts = [
        'managers' => 'array',
        'users' => 'array',
        'readonlys' => 'array',
    ];
}
