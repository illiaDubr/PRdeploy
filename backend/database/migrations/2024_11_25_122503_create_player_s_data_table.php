<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('player_s_data', function (Blueprint $table) {
            $table->id();
            $table->foreignId(column: 'user_id')->nullable()->constrained()->nullOnDelete();
            $table->string(column: 'name')->nullable();
            $table->string(column: 'surname')->nullable();
            $table->string(column: 'middle_name')->nullable();
            $table->string(column: 'discord')->nullable();
            $table->string(column: 'nickPS')->nullable();
            $table->string(column: 'nickGG')->nullable();
            $table->string(column: 'nickRedStar')->nullable();
            $table->string(column: 'nickTigerGaming')->nullable();
            $table->string(column: 'nickPartyPoker')->nullable();
            $table->string(column: 'nickPokerstars')->nullable();
            $table->string(column: 'nick888poker')->nullable();
            $table->string(column: 'nickWPNpoker')->nullable();
            $table->string(column: 'nickStretchpoker')->nullable();
            $table->string(column: 'nickCoinpoker')->nullable();
            $table->string(column: 'nickchikoPoker')->nullable();
            $table->string(column: 'nickiPoker')->nullable();
            $table->string(column: 'mailSkrill')->nullable();
            $table->string(column: 'mailNeteller')->nullable();
            $table->string(column: 'mailGipsyTeam')->nullable();
            $table->string(column: 'mailLuxon')->nullable();
            $table->string(column: 'Email')->nullable();
            $table->string(column: 'telegram')->nullable();
            $table->string(column: 'phonenumber')->nullable();
            $table->float(column: 'AmountOfDamage')->nullable();
            $table->float(column: 'MakeupAmount')->nullable();
            $table->mediumText(column: 'fundComment')->nullable();
            $table->mediumText(column: 'playerComment')->nullable();
            $table->string(column: 'fund')->nullable();
            $table->string(column: 'location')->nullable();
            $table->string(column: 'dateofbirth')->nullable();
            $table->string(column: 'backerTag')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('player_s_data');
    }
};
