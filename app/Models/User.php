<?php

namespace App\Models;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'TBL_USER';
    protected $primaryKey = 'ID_USER';

    protected $fillable = [
        'NOM_PRENOM',
        'ADRESSE',
        'ID_VILLE',
        'EMAIL',
        'PASSWORD',
        'OPTIN',
    ];

    protected $hidden = [
        'PASSWORD',
        'remember_token',
    ];

    protected $casts = [
        'EMAIL' => 'string',
    ];

    public function getAuthPassword()
    {
        return $this->PASSWORD;
    }
}
