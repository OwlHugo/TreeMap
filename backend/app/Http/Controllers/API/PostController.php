<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Http\Request;

use App\Models\Post;

class PostController extends Controller
{
    use AuthorizesRequests;
    public function index()
    {
        return Post::with(['user', 'likes', 'comments'])
            ->withCount('likes', 'comments')
            ->latest()
            ->paginate(10);
    }

    public function store(Request $request)
    {
        $request->validate(['content' => 'required|string|max:280']);
        return $request->user()->posts()->create($request->all());
    }

    public function show(Post $post)
    {
        return $post->load('user', 'likes', 'comments.user');
    }

    public function update(Request $request, Post $post)
    {
        $this->authorize('update', $post);
        $request->validate(['content' => 'required|string|max:280']);
        $post->update($request->all());
        return $post;
    }

    public function destroy(Post $post)
    {
        $this->authorize('delete', $post);
        $post->delete();
        return response()->noContent();
    }
}
