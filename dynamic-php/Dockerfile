FROM php:7.4-apache

WORKDIR /app

COPY 000-default.conf /etc/apache2/sites-available/000-default.conf
COPY start-apache /usr/local/bin
RUN a2enmod rewrite

COPY src /var/www/
RUN chown -R www-data:www-data /var/www

EXPOSE 80

CMD ["start-apache"]
