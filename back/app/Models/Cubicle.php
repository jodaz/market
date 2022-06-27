<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cubicle extends Model
{
    use HasFactory;

    protected $table = 'cubicles';

    protected $fillable = [
        'num',
        'item_id',
        'address',
        'taxpayer_id',
        'active',
        'created_by',
        'disincorporated_at'
    ];

    public function item()
    {
        return $this->belongsTo(Item::class);
    }

    public function createdBy()
    {
        return $this->belongsTo(User::class);
    }

    public function taxpayer()
    {
        return $this->belongsTo(Taxpayer::class);
    }
}
