FROM nginx:1.17.8-alpine

WORKDIR /images

VOLUME /images

VOLUME /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/nginx.conf