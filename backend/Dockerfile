FROM php:8.2-fpm

# Atualizar pacotes do sistema e instalar dependências necessárias
RUN apt-get update -y && apt-get install -y \
    openssl \
    zip \
    unzip \
    git \
    libpq-dev \
    libonig-dev \
    && docker-php-ext-install pdo_pgsql pdo mbstring

# Instalar o Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Definir o diretório de trabalho
WORKDIR /app

# Copiar os arquivos do aplicativo para o contêiner
COPY . /app

# Instalar dependências do projeto
RUN composer install

# Configurar a execução do servidor
CMD php artisan serve --host=0.0.0.0 --port=8000
EXPOSE 8000
