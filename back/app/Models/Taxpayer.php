<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Taxpayer extends Model
{
    use SoftDeletes, HasFactory;

    protected $table = 'taxpayers';

    protected $fillable = [
        'rif',
        'name',
        'active',
        'address',
        'phone',
        'email',
        'created_by'
    ];

    public function createdBy()
    {
        return $this->belongsTo(User::class, 'created_by');
    }
}
