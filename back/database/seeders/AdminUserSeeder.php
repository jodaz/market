<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;

class AdminUserSeeder extends Seeder
{
    private $roles = [
        'admin', 'usuario'
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach($this->roles as $role) {
            Role::create([
                'name' => $role
            ]);
        }

        $user = User::create([
            'login' => 'admin',
            'password' => bcrypt('qwerty123'),
            'identity_card' => '27572434',
            'names' => 'Jesus',
            'surnames' => 'Ordosgoitty'
        ]);

        $user->syncRoles([1]);
    }
}
