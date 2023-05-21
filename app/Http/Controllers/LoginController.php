<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Providers\RouteServiceProvider;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request)
    {
        //TODO: Use your custom form request or use the request helper

        // Validating input
        $request->validate([
            'EMAIL' => 'required|email',
            'PASSWORD' => 'required'
        ]);

        // Attempting to authenticate
        if (Auth::attempt(['EMAIL' => $request->EMAIL, 'password' => $request->PASSWORD])) {
            //TODO: Redirect to a specific location if successful
            return redirect(RouteServiceProvider::HOME);
        }

        //TODO: Return a specific view with an error if unsuccessful
        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function logout(Request $request)
    {
        Auth::logout();
        return redirect('/login');
    }
}
