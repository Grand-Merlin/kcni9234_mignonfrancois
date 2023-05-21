<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Support\Facades\Log;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request)
    {
        // Validating input
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'   
        ]);
    
        // Get user by email
        $user = User::where('EMAIL', $request->email)->first(); 
    
        // Check if user exists and the hashed password matches the given password
        if ($user && Hash::check($request->password, $user->PASSWORD)) { 
            // Log successful login
            Log::info('User logged in: ', ['email' => $request->email]); 
    
            // Manual login
            Auth::login($user);
            return redirect(RouteServiceProvider::IMMOBILIER);
        }
    
        // Log failed login attempt
        Log::warning('Failed login attempt: ', ['email' => $request->email]);
    
        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }
    

    public function logout(Request $request)
    {
        // Log successful logout
        Log::info('User logged out: ', ['email' => Auth::user()->email]);

        Auth::logout();
        return redirect('/login');
    }
}
