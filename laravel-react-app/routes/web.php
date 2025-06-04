<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');  // Laravel main homepage (Blade view)
});

// Return the React page for any route starting with /react or any sub-routes under it
Route::view('/react/{any?}', 'react')->where('any', '.*');
