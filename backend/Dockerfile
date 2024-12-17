FROM php:8.2-fpm

# Установка необходимых пакетов и расширений
RUN apt-get update && apt-get install -y \
libzip-dev zip unzip git libpng-dev && \
docker-php-ext-install pdo pdo_mysql zip gd

# Установка Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Создание рабочей директории
WORKDIR /var/www

# Копирование файлов проекта
COPY . .

# Установка зависимостей через Composer
RUN composer install --no-dev --optimize-autoloader

# Установка прав доступа
RUN chown -R www-data:www-data /var/www

# Expose порт для веб-сервера
EXPOSE 9000

CMD ["php-fpm"]
