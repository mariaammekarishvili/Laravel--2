<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMyClassUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('my_class_user', function (Blueprint $table) {
            $table->id();
            $table->foreignId('my_class_id')->constrained()
                ->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('user_id')->constrained()
                ->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('my_class_user');
    }
}
