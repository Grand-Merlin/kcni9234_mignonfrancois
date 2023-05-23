<!DOCTYPE html>
<html>
<head>
    <title>Formulaire</title>
    <link href="{{ asset('../css/styles.css') }}" rel="stylesheet">
</head>
<body>
<div class="form-container">
    <form id="register-form" method="POST" action="/registerUser" novalidate>
    @csrf
    <div class="form-group">
    <label for="email">Adresse e-mail* :</label>
    <input type="email" id="email" name="email" required>
    <img id="email-validation-icon" src="{{ asset('images/icon_success.png') }}" alt="success" class="validation-icon">
</div>
<div class="form-group">
    <label for="confirm-email">Confirmez l'adresse e-mail :</label>
    <input type="email" id="confirm-email" name="confirm-email">
    <img id="email-validation-icon" src="{{ asset('images/icon_error.png') }}" alt="error" class="validation-icon">
</div>
<div class="form-group">
    <label for="password">Mot de passe* :</label>
    <input type="password" id="password" name="password" required>
    <img id="email-validation-icon" src="{{ asset('images/icon_success.png') }}" alt="success" class="validation-icon">
</div>
<div class="form-group">
    <label for="confirm-password">Confirmez le mot de passe :</label>
    <input type="password" id="confirm-password" name="confirm-password">
    <img id="email-validation-icon" src="{{ asset('images/icon_error.png') }}" alt="error" class="validation-icon">
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
    <select id="country" name="country">
        @foreach($countries as $country)
            <option value="{{ $country->CDE_PAYS }}">{{ $country->NOM_PAYS }}</option>
        @endforeach
    </select>
</div>
<div class="form-group">
    <label for="locality">Localité* :</label>
    <select id="locality" name="locality" required>
        @foreach($cities as $city)
            <option value="{{ $city->ID_VILLE }}">{{ $city->VILLE }}</option>
        @endforeach
    </select>
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
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"></script>
<script src="{{ asset('../js/main.js') }}"></script>
</body>
</html>