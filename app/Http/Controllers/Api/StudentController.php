<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StudentRequest;
use App\Models\MyClass;
use App\Models\User;
use Illuminate\Http\Request;
use Yajra\DataTables\DataTables;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $students = User::all(['id','name']);

        return DataTables::of($students)
            ->addColumn("edit", function ($item) {
                return '<button type="button" class="btn btn-primary edit" item="' . $item->id . '">ცვლილება</button>';
            })
            ->addColumn("delete", function ($item) {
                return '<button type="button" class="btn btn-danger delete" item="' . $item->id . '">წაშლა</button>';
            })
            ->rawColumns(["edit","delete"])
            ->make(TRUE);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return [
            'status' => 'success',
            'classes' => MyClass::all(['id','name']),
        ];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StudentRequest $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $student = User::with('classes:id,name')->find($id,['id','name']);

        return [
            'status' => 'success',
            'student' => $student,
            'data' => [
                'classes' => MyClass::all(['id','name']),
                'selectedClasses' => $student->classes,
            ]
        ];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StudentRequest $request, $id)
    {
        $student = User::find($id);

        $classes = array_column($request->classes ?? [], 'id');
        $student->classes()->sync($classes);

        return ['status' => 'success'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $student = User::find($id);

        $student->delete();

        return ['status' => 'success'];
    }
}
