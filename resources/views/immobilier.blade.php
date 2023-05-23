<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestion des biens immobiliers</title>
    <link href="{{ asset('css/styles.css') }}" rel="stylesheet">
</head>
<body>
    <div class="header">
        <div class="header-content">
            <h1>Gestion des biens immobiliers</h1>
            <p class="welcome-text">Bienvenue, {{ Auth::user()->name }}</p>
            <div class="header-buttons">
            <a href="{{ url('/immobilier') }}" class="btn">Ajouter</a>
                <form method="POST" action="{{ route('/devweb') }}">
                    @csrf
                    <button class="btn">Déconnexion</button>
                </form>
            </div>
            <div class="button-group">
                <a href="{{ route('myProperties') }}" class="btn">Mes biens</a>
                <a href="{{ route('allProperties') }}" class="btn">Tous les biens</a>
            </div>
            <div class="button-group">
                <a href="{{ route('filterProperties', ['filter' => 'all']) }}" class="btn">Tout</a>
                <a href="{{ route('filterProperties', ['filter' => 'sale']) }}" class="btn">Vente</a>
                <a href="{{ route('filterProperties', ['filter' => 'rent']) }}" class="btn">Location</a>
            </div>
        </div>
    </div>

    <div class="grid-container-wrapper">
        <div class="grid-container">
            @foreach($propriete as $prop)
                <div class="grid-item">
                    <img src="{{ asset('images/' . $prop->images) }}" alt="{{ $prop->desc }}">
                    <p class="description">{{ $prop->desc }}</p>
                    <p class="type">Type de bien: {{ $prop->type_bien }}</p>
                    <p class="price">Prix: {{ $prop->prix }}€</p>
                    <p class="status">État: {{ $prop->etat }}</p>
                </div>
            @endforeach
        </div>
    </div>
    
    <form method="POST" action="{{ route('devweb') }}">
        @csrf
        <button type="submit">Déconnexion</button>
    </form>
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