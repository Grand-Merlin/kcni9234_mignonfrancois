<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use HasFactory;

    public $timestamps = false; // la table n'a pas de colonnes created_at et updated_at

    protected $table = 'TBL_VILLE';  // Nom de la table

    protected $primaryKey = 'ID_VILLE';  // Clé primaire

    public $incrementing = true;  // La clé primaire est auto-incrémentée

    protected $keyType = 'int';  // Le type de la clé primaire est un entier

    // Les champs qui peuvent être remplis massivement
    protected $fillable = [
        'ID_VILLE',
        'CPOST',
        'VILLE',
        'CDE_PAYS'
    ];

    // Relation avec la table pays
    public function country()
    {
        return $this->belongsTo(Country::class, 'CDE_PAYS', 'CDE_PAYS');
    }
}
