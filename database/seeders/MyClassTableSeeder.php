<?php

namespace Database\Seeders;

use App\Models\MyClass;
use Illuminate\Database\Seeder;

class MyClassTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        MyClass::create([
            'name' => 'მათემატიკა'
        ]);

        MyClass::create([
            'name' => 'ქართული'
        ]);

        MyClass::create([
            'name' => 'ინგლისური'
        ]);
    }
}
