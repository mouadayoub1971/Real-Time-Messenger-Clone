<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ChatsController extends Controller
{
    public function index() {
        try {
            return Inertia::render('chats/Index');
        } catch(\Exception $e){
            return back()->with([
                'error_msg' => $e->getMessage()
            ]);
        }
    }
}
