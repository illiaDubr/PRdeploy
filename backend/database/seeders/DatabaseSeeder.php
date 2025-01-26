<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run()
    {
        // Создаем первого пользователя
        $user1 = \App\Models\User::create([
            'name' => 'John Doe',
'email' => 'john@example.com',
'password' => bcrypt('password'),
]);

// Создаем игрока, связанного с user1
\DB::table('players')->insert([
'player_id'         => 'player-001',
'user_id'           => $user1->id,
'first_name'        => 'John',
'last_name'         => 'Doe',
'nickPS'            => 'Johny',
'nickGG'            => 'JD_GG',
'Pokerstars_com'    => 'johan',
'Pokersters_es'    => 'johan1234',
'telegram'          => '@john_doe',
'created_by'        => $user1->id,
'kyc_status'        => true,
'backer_tag'        => 'arbitration',
'created_at'        => now(),
'updated_at'        => now(),
]);

// Создаем второго пользователя
$user2 = \App\Models\User::create([
'name' => 'Alice Smith',
'email' => 'alice@example.com',
'password' => bcrypt('password'),
]);

// Создаем игрока, связанного с user2
\DB::table('players')->insert([
'player_id'         => 'player-002',
'user_id'           => $user2->id,
'first_name'        => 'Alice',
'last_name'         => 'Smith',
'nickPS'            => 'Alice123',
'nickGG'            => 'AS_GG',
'telegram'          => '@alice_smith',
'created_by'        => $user2->id,
'kyc_status'        => false,
'backer_tag'        => 'no tag',
'created_at'        => now(),
'updated_at'        => now(),
]);

// Создаем репутационные записи для player-001
\DB::table('reputation_records')->insert([
[
'player_id' => 'player-001',
'fund_name' => 'Fund Alpha',
'comment'   => 'Чипдампинг. Проиграл все фишки игроку с ником 料理鼠王',
'amount'    => '2500',
'source'    => 'Admin panel',
'created_at' => now(),
'updated_at' => now(),
],
[
'player_id' => 'player-001',
'fund_name' => 'Fund Beta',
'comment'   => 'Отличный игрок, прошел аудит',
'amount'    => '0',
'source'    => 'Verification team',
'created_at' => now(),
'updated_at' => now(),
],
]);

// Создаем репутационные записи для player-002
\DB::table('reputation_records')->insert([
[
'player_id' => 'player-002',
'fund_name' => 'Fund Gamma',
'comment'   => 'Игрок ушел в минус, требуется контроль',
'amount'    => '5000',
'source'    => 'Support team',
'created_at' => now(),
'updated_at' => now(),
],
]);
}
}
