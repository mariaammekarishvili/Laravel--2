<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\MyClass;
use Yajra\DataTables\DataTables;

class ClassController extends Controller
{
    public function index()
    {
        $classes = MyClass::all(['id','name']);

        return DataTables::of($classes)
            ->addColumn("show", function ($item) {
                return '<button type="button" class="btn btn-primary show" item="' . $item->id . '">ნახვა</button>';
            })
            ->rawColumns(["show"])
            ->make(TRUE);
    }

    public function show($id)
    {
        $class = MyClass::with('users:id,name')->find($id,['id','name']);

        return [
            'status' => 'success',
            'class' => $class
        ];
    }

    public function myClasses()
    {
        $user = \Auth::user();
        $user->load('classes:id,name');
        return [
            'status' => 'success',
            'classes' => $user->classes
        ];
    }
}
