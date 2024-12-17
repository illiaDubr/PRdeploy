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
    'paths' => ['*'],             // Разрешаем CORS для всех путей
    'allowed_methods' => ['*'],   // Разрешаем все методы: GET, POST, PUT, DELETE и т.д.
    'allowed_origins' => ['*'],   // Разрешаем все источники (origins)
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],   // Разрешаем все заголовки
    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true,

];
