<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'მარიამ',
            'email' => 'mariam@gmail.com',
            'password' => bcrypt('mariam123'),
            'api_token' => \Str::uuid(),
            'is_admin' => 1,
        ]);

        User::create([
            'name' => 'test',
            'email' => 'test@gmail.com',
            'password' => bcrypt('test123'),
            'api_token' => \Str::uuid(),
        ]);
    }
}
