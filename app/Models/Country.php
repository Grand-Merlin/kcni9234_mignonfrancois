<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;
    
    public $timestamps = false; // la table n'a pas de colonnes created_at et updated_at

    protected $table = 'TBL_PAYS';  // Nom de la table

    protected $primaryKey = 'CDE_PAYS';  // Clé primaire

    public $incrementing = false;  // La clé primaire n'est pas auto-incrémentée

    protected $keyType = 'string';  // Le type de la clé primaire est une chaîne de caractères

    // Les champs qui peuvent être remplis massivement
    protected $fillable = [
        'CDE_PAYS',
        'NOM_PAYS'
    ];
}
