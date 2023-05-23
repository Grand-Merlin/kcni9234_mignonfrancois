<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterUserController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/devweb', function () {
    return view('login');
});


Route::get('/register', function () {
    return view('register');
});

Route::get('/test', function () {
    return view('testconndb');
});

Route::get('/immobilier', function () {
    return view('immobilier');
});

Route::get('/register', [RegisterUserController::class, 'showForm']);
Route::post('/devweb', [LoginController::class, 'login']);
Route::post('/devweb', [LoginController::class, 'logout']);
//Route::post('/registerUser', [RegisterUserController::class'']);

