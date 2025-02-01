<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Laravel\Sanctum\PersonalAccessToken;

class AuthController extends Controller
{
    /**
     * Validate the auth token.
     *
     * @param  Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function validateToken(Request $request)
    {
        $token = $request->input('token');

        if (!$token) {
            return response()->json(['isValid' => false], 401);
        }

        $accessToken = PersonalAccessToken::findToken($token);

        if ($accessToken) {
            $user = $accessToken->tokenable;
            if ($user) {
                return response()->json(['isValid' => true], 200);
            }
        }

        // Se não for válido, retorne false
        return response()->json(['isValid' => false], 401);
    }
}
