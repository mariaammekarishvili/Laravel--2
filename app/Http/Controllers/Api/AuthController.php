<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;


class AuthController extends Controller
{
    public function username()
    {
        return 'email';
    }

    public function login(LoginRequest $request)
    {
        if(!auth()->attempt($request->validated(), true)) {
            return response(['password'=>'მომხმარებლის სახელი ან პაროლი არასწორია.']);
        }

        $user = \Auth::user();

        return response([
            'status' => "success",
            'name' => $user->name,
            'apiToken' => $user->api_token,
            'isAdmin' => $user->is_admin,
        ]);
    }

    public function logout(Request $request)
    {
        \Auth::user()->update([
            'api_token' => (string) \Str::uuid(),
        ]);

        return response(["status" => "success"]);
    }

}
