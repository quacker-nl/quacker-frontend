FROM nginx:stable-alpine as production-stage
COPY /dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
