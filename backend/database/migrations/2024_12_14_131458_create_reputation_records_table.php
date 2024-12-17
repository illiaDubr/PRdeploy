<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('reputation_records', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('player_id')->nullable();
            $table->unsignedBigInteger('backer_id')->nullable();

            $table->text('comment')->nullable();
            $table->string('source')->nullable();
            $table->timestamps();

            $table->foreign('player_id')->references('player_id')->on('players')->onDelete('cascade');
            $table->foreign('backer_id')->references('backer_id')->on('backers')->onDelete('cascade');
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reputation_records');
    }
};
