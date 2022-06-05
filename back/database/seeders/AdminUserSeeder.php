<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'login' => 'admin',
            'password' => bcrypt('qwerty123'),
            'identity_card' => '27572434',
            'names' => 'Jesus',
            'surnames' => 'Ordosgoitty'
        ]);
    }
}
