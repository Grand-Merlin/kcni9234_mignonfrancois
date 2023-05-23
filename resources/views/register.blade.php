<!DOCTYPE html>
<html>
<head>
    <title>Formulaire</title>
    <link href="{{ asset('../css/styles.css') }}" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>

</head>
<body>
<div class="form-container">
    <form id="login-form" method="POST" action="/registerUser" novalidate>
    @csrf
        <div class="form-group">
            <label for="email">Adresse e-mail* :</label>
            <input type="email" id="email" name="email" required>
            <img id="password-validation-icon" src="" alt="" class="validation-icon">
        </div>
        <div class="form-group">
            <label for="confirm-email">Confirmez l'adresse e-mail :</label>
            <input type="email" id="confirm-email" name="confirm-email">
            <img id="password-validation-icon" src="" alt="" class="validation-icon">
        </div>
        <div class="form-group">
            <label for="password">Mot de passe* :</label>
            <input type="password" id="password" name="password" required>
            <img id="password-validation-icon" src="" alt="" class="validation-icon">
        </div>
        <div class="form-group">
            <label for="confirm-password">Confirmez le mot de passe :</label>
            <input type="password" id="confirm-password" name="confirm-password">
            <img id="password-validation-icon" src="" alt="" class="validation-icon">
        </div>
        <div class="form-group">
            <label for="fullname">Nom complet* :</label>
            <input type="text" id="fullname" name="fullname" required>
        </div>
        <div class="form-group">
            <label for="address">Adresse postale* :</label>
            <input type="text" id="address" name="address" required>
        </div>
        <div class="form-group">
            <label for="country">Pays de résidence :</label>
            <input type="text" id="country" name="country">
        </div>
        <div class="form-group">
            <label for="locality">Localité* :</label>
            <input type="text" id="locality" name="locality" required>
        </div>
	<div class="form-group">
    <input type="checkbox" id="terms" name="terms" required>
    <label for="terms">J'accepte les <a href="cgu.html">Conditions Générales d'Utilisation</a>*</label>

</div>
<div class="form-group">
    <button type="reset" id="cancel">Annuler</button>
    <button type="submit" id="register">Inscription</button>
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
<script src="{{ asset('../js/main.js') }}"></script>
</body>
</html>