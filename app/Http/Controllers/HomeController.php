<?php

namespace App\Http\Controllers;

use Illuminate\Contracts\Auth\CanResetPassword;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

class HomeController extends Controller
{
    public function index() {
        return Inertia::render('welcome/Index', [
           'canResetPassword' => Route::has('password.request'),
        ]);
    }
}
