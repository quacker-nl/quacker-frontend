FROM nginx:stable-alpine
COPY ./dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
