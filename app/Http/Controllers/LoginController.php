<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    // Afficher le formulaire de connexion
    public function showLoginForm()
    {
        // TODO : vérifier si l'utilisateur est déjà connecté, si oui, redirigez-le vers la page d'accueil
        return view('login');
    }

    // Gérer la soumission du formulaire de connexion
    public function login(Request $request)
    {
        // Valider les données entrées par l'utilisateur
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        // Vérifier si l'utilisateur existe et si les informations de connexion sont correctes
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            // Si l'authentification est réussie, rediriger l'utilisateur vers la page d'accueil
            // TODO : Ajouter des actions après la connexion réussie, par exemple, enregistrement de la dernière date de connexion
            return redirect()->intended('/');
        }

        // Si l'authentification échoue, rediriger l'utilisateur vers la page de connexion avec un message d'erreur
        // TODO : Ajouter une limite d'essais de connexion et bloquer temporairement l'utilisateur après un certain nombre d'essais
        return back()->withErrors([
            'email' => 'Les informations d\'identification fournies ne correspondent pas à nos dossiers.',
        ]);
    }
}
