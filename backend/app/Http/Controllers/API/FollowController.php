<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class FollowController extends Controller
{
    public function follow(User $user, Request $request)
    {
        $request->user()->follow($user);
        return response()->json(['message' => 'Followed successfully']);
    }

    public function unfollow(User $user, Request $request)
    {
        $request->user()->unfollow($user);
        return response()->json(['message' => 'Unfollowed successfully']);
    }
}
