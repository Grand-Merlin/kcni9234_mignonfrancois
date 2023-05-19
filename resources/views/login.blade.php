<!DOCTYPE html>
<html>

<head>
    <title>Page d'authentification</title>
    <link rel="stylesheet" href="{{ asset('css/styles.css') }}">
</head>

<body>
    
    <div id="background-div">
        <!--...-->
    </div>

    <div id="content-div">
        <input type="checkbox" id="toggle_checkbox">
        <label for="toggle_checkbox">
            <!--...-->
        </label>

        <!-- notez l'action du formulaire ici -->
        <form action="{{ route('login') }}" method="post">
            @csrf  <!-- Ceci est requis pour la protection contre les attaques CSRF -->
            <div class="input-container">
                <div>
                    <label for="email">Email:</label><br>
                    <label for="password">Mot de passe:</label>
                </div>
                <div>
                    <input type="email" id="email" name="email" required><br>
                    <input type="password" id="password" name="password" required>
                </div>
            </div>
            <div class="button-container">
                <input type="submit" value="Connexion">
                <button type="button" onclick="window.location.href='{{ route('register') }}'">Créer un nouveau compte</button>
            </div>
        </form>
    </div>

    <script src="{{ asset('js/main.js') }}"></script>
</body>

</html>