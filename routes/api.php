<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ShipscheduleController;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

//Route::get('products', 'Api\ProductController@index');
Route::post('shipschedule', 'Api\ShipscheduleController@store');
Route::get('shipschedule', 'Api\ShipscheduleController@index');
Route::delete('shipschedule/{id}', 'Api\ShipscheduleController@destroy');
//Route::patch('shipschedule/{id}/{edit}', 'Api\ShipscheduleController@update');
Route::put("shipschedule/{id}", [ShipscheduleController::class, "update"]);

//User
Route::post('user', 'Api\UserController@store');
Route::get('user', 'Api\UserController@index');

//Route::resource('shipschedule'=>'ShipscheduleController');

// Route::get('/shipschedule', function () {
//     return ShipscheduleResource::collection(Shipschedule::all());
// });
//Route::apiResource('shipschedule', 'ShipscheduleController');

// //Route::apiResource(['shipschedule' => 'Api\ShipscheduleController']);
