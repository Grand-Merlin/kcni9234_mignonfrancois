<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <?php
            try {
                DB::connection()->getPdo();
                echo "C'est bon, la connexion à la base de données fonctionne.";
            } catch (\Exception $e) {
                echo "Erreur de connexion à la base de données : " . $e->getMessage();
            }
        ?>
    </div>
</body>
</html>
