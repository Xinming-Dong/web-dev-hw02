server {
        listen 80;
        listen [::]:80;

        root /home/xinming/www/hw02;

        index index.html;

        server_name hw02.elephantdong.com www.hw02.elephantdong.com;

        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri $uri/ =404;
        }
}
