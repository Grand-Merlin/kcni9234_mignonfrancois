<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestion des biens immobiliers</title>
    <!-- Ajoutez ici d'autres balises meta, des fichiers CSS ou JS si nécessaire -->
</head>
<body>
    <h1>Bienvenue sur la page de gestion des biens immobiliers</h1>
    <!-- Vous pouvez ajouter ici d'autres éléments HTML, comme des formulaires, des tableaux, etc. -->

    <!-- Ajoute un formulaire pour la déconnexion -->
    <form method="POST" action="/logout">
        @csrf
        <button type="submit">Déconnexion</button>
    </form>
</body>
</html>
