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
        'addresses',
        'taxpayer_id',
        'created_by'
    ];

    public function item()
    {
        $this->belongsTo(Item::class);
    }

    public function createdBy()
    {
        $this->belongsTo(User::class);
    }

    public function taxpayer()
    {
        $this->belongsTo(Taxpayer::class);
    }
}
