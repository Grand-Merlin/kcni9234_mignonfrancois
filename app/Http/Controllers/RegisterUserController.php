<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Providers\RouteServiceProvider;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use App\Models\Country;
use App\Models\City;

class RegisterUserController extends Controller
{
    public function showForm() {
        $countries = Country::all();
        $cities = City::all();
    
        return view('register', ['countries' => $countries, 'cities' => $cities]);
    }
}