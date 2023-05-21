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
    
        // Get user by email
        $user = User::where('EMAIL', $request->email)->first();
    
        // Check if user exists and the hashed password matches the given password
        if ($user && md5($request->password) === $user->PASSWORD) {
            // Manual login
            Auth::login($user);
            return redirect(RouteServiceProvider::IMMOBILIER);
        }
    
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