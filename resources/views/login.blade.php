<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <link href="{{ asset('css/styles.css') }}" rel="stylesheet">
</head>
<body>
<div class="form-container">
    <form id="login-form" method="POST" action="/login" novalidate>
    @csrf
        <div class="form-group">
            <label for="email">Adresse e-mail* :</label>
            <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
            <label for="password">Mot de passe* :</label>
            <input type="password" id="password" name="password" required>
        </div>
        <div class="form-group">
            <button type="submit" id="login">Connexion</button>
            <button type="button" id="create-account" onclick="window.location.href='/register'">Créer un nouveau compte</button>
        </div>
    </form>
</div>
<input type="checkbox" id="toggle_checkbox">
<label for="toggle_checkbox" class="switch-label">
  <div id="star">
    <div class="star" id="star-1">★</div>
    <div class="star" id="star-2">★</div>
  </div>
  <div id="moon"></div>
</label>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
<script src="{{ asset('js/main.js') }}"></script>
</body>
</html>