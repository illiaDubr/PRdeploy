<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeamManager extends Model
{
    use HasFactory;

    protected $fillable = [
        'team_id',
        'manager_id',
    ];

    public function team()
    {
        return $this->belongsTo(Team::class, 'team_id');
    }
}
