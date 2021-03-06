<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/**
 * Controllers
 */
use App\Http\Controllers\UserController;
use App\Http\Controllers\TaxpayerController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\CubicleController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UpdatePasswordController;
use App\Http\Controllers\StatisticsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::group(['middleware' => ['role:admin']], function () {
        Route::resource('/users', UserController::class)
            ->except('destroy');
        Route::resource('/roles', RoleController::class);
        Route::post('/users/{user}/update-status', [UserController::class, 'updateStatus']);
    });
    Route::resource('/items', ItemController::class);
    Route::resource('/taxpayers', TaxpayerController::class);
    Route::resource('/cubicles', CubicleController::class);
    Route::get('/logout', [AuthController::class, 'logout']);
    Route::post('/security', UpdatePasswordController::class);
    Route::get('/statistics', StatisticsController::class);
});

Route::post('/login', [AuthController::class, 'login']);
