<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Cross-Origin Resource Sharing (CORS) Configuration
    |--------------------------------------------------------------------------
    |
    | Here you may configure your settings for cross-origin resource sharing
    | or "CORS". This determines what cross-origin operations may execute
    | in web browsers. You are free to adjust these settings as needed.
    |
    | To learn more: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    |
    */
    'paths' => ['api/*', 'sanctum/csrf-cookie'], // Пути, на которых CORS активен
    'allowed_methods' => ['*'],   // Разрешаем все методы: GET, POST, PUT, DELETE и т.д.
    'allowed_origins' => ['http://localhost:3000', 'http://135.181.84.236'], // Конкретные origins
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],   // Разрешаем все заголовки
    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true, // Включить передачу cookies

];
