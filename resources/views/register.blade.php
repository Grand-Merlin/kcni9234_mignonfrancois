<!DOCTYPE html>
<html>

<head>
    <!-- Définit le titre de la page -->
    <title>Formulaire d'inscription</title>
    <!-- Lie la feuille de style CSS à la page HTML -->
    <link rel="stylesheet" href="{{ asset('../../../css/styles.css') }}">
</head>

<body>
    <div id="background-div">
        <div class="background"></div>
        <div class="background background_dark"></div>
    </div>

    <div id="content-div">
        <!-- Ajoute un bouton bascule pour le thème sombre -->
        <input type="checkbox" id="toggle_checkbox">
        <label for="toggle_checkbox">
            <div id="star">
                <div class="star" id="star-1">★</div>
                <div class="star" id="star-2">★</div>
            </div>
            <div id="moon"></div>
        </label>
        <div id="registration-form">
            <form action="/registerUser" method="post">
                <input type="hidden" name="_token" value="{{ csrf_token() }}">
                @csrf
                <div class="input-container">
                    <div>
                        <label for="email">Email*:</label><br>
                        <input type="email" id="email" name="email" required><br>
                        <label for="email-verification">Email de vérification*:</label><br>
                        <input type="email" id="email-verification" name="email-verification" required><br>

                        <label for="password">Mot de passe*:</label><br>
                        <input type="password" id="password" name="password" required><br>
                        <label for="password-verification">Vérification du mot de passe*:</label><br>
                        <input type="password" id="password-verification" name="password-verification" required><br>

                        <label for="fullname">Nom Prénom*:</label><br>
                        <input type="text" id="fullname" name="fullname" required><br>

                        <label for="address">Adresse*:</label><br>
                        <textarea id="address" name="address" required></textarea><br>

                        <label for="country">Pays:</label><br>
                        <input type="text" id="country" name="country"><br>

                        <label for="locality">Localité*:</label><br>
                        <input type="text" id="locality" name="locality" required><br>
                        
                        <input type="checkbox" id="terms" name="terms" required>
                        <label for="terms">J'accepte les <a href="/terms-and-conditions">Conditions Générales</a>*</label><br>
                    </div>
                </div>
                <div class="button-container">
                    <input type="submit" value="Inscription">
                    <button type="button" onclick="window.location.href='login'">Annuler</button>
                </div>
            </form>
        </div>
    </div>
    
    <!-- Lie le fichier JavaScript à la page HTML -->
    <script src="{{ asset('../../../js/main.js') }}"></script>

</body>

</html>