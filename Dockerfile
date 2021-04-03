# production stage
FROM nginx:stable-alpine as production-stage
COPY /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
