<?php

use App\Http\Controllers\API\FeedController;
use App\Http\Controllers\API\LikeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\API\PostController;
use App\Http\Controllers\API\AuthController;

Route::controller(RegisterController::class)->group(function () {
    Route::post('register', 'register');
    Route::post('login', 'login');
});
Route::post('validate-token', [AuthController::class, 'validateToken']);

Route::middleware('auth:sanctum')->group(function () {
    //Post
    Route::apiResource('posts', PostController::class);

    //Feed
    Route::get('feed', [FeedController::class, 'index']);

    //Likes
    Route::post('posts/{post}/like', [LikeController::class, 'likePost']);
    Route::post('posts/{post}/unlike', [LikeController::class, 'unlikePost']);

    //Commentários

});
