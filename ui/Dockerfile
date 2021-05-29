FROM node:lts-alpine as build-stage

WORKDIR /app
# 先に依存関係だけ解決するとimageのキャッシュが効く
COPY package*.json ./
RUN yarn install --network-timeout 600000
COPY . .
# RUN yarn test:unit
RUN yarn build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# reload対応
RUN sed -i 's/index  index.html index.htm;/index  index.html index.htm;\n    try_files $uri $uri\/ \/index.html?\$args;/' \
  /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
