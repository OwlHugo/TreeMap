<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\{Post, Comment};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LikeController extends Controller
{
    public function likePost(Post $post)
    {
        $post->like(Auth::id());
        return response()->json(['message' => 'Post liked']);
    }

    public function unlikePost(Post $post)
    {
        $post->unlike(Auth::id());
        return response()->json(['message' => 'Post unliked']);
    }
}
