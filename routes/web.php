<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterUserController;
use App\Http\Controllers\PropertyController;
use App\Http\Controllers\AuthController;


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

//Route::get('/register', function () {
 //   return view('register');
//});

Route::get('/test', function () {
    return view('testconndb');
});

Route::get('/immobilier', function () {
    return view('immobilier');
})->middleware('auth'); // Ajouter un middleware pour s'assurer que seuls les utilisateurs authentifiés peuvent accéder à cette page

Route::get('/register', [RegisterUserController::class, 'showForm']);
Route::post('/login', [LoginController::class, 'login'])->name('login'); // Formulaire de connexion
Route::post('/logout', [LoginController::class, 'logout']); // Route pour déconnecter l'utilisateur