<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    use HasFactory;

    protected $table = 'TBL_PROPERTY';  // change to your actual table name
    protected $primaryKey = 'ID_PROPERTY';  // change to your actual primary key

    protected $fillable = [
        // fill with your actual columns
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'ID_USER');  // change 'ID_USER' to your actual foreign key on the properties table
    }
}
