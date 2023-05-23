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
Route::post('/devweb', [LoginController::class, 'login']); // Formulaire de connexion
Route::post('/logout', [LoginController::class, 'logout']); // Route pour déconnecter l'utilisateur

// Page d'accueil
Route::get('/immobilier', [PropertyController::class, 'index'])->name('immobilier');

// Ajout de biens
// Note: Ceci nécessiterait probablement une méthode POST également pour traiter le formulaire d'ajout
// Route::post('/immobilier/add', [PropertyController::class, 'add']);

// Déconnexion
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

// Mes biens
Route::get('/myProperties', [PropertyController::class, 'myProperties'])->name('myProperties');

// Tous les biens
Route::get('/allProperties', [PropertyController::class, 'allProperties'])->name('allProperties');

// Filtrer les propriétés
Route::get('/filterProperties/{filter}', [PropertyController::class, 'filterProperties'])->name('filterProperties');