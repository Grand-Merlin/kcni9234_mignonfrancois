<?php

namespace App\Http\Controllers\Auth;

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
            'EMAIL' => 'required|email',
            'PASSWORD' => 'required'
        ]);

        // Get user by email
        $user = User::where('EMAIL', $request->EMAIL)->first();

        // Check if user exists and the hashed password matches the given password
        if ($user && Hash::check($request->PASSWORD, $user->PASSWORD)) {
            // Log successful login
            Log::info('User logged in: ', ['email' => $request->EMAIL]);

            // Manual login
            Auth::login($user);
            return redirect(RouteServiceProvider::IMMOBILIER);
        }

        // Log failed login attempt
        Log::warning('Failed login attempt: ', ['email' => $request->EMAIL]);

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ]);
    }

    public function logout(Request $request)
    {
        // Log successful logout
        Log::info('User logged out: ', ['email' => Auth::user()->EMAIL]);

        Auth::logout();
        return redirect('/login');
    }
}
