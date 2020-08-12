FROM node:11.1-alpine as develop-stage
WORKDIR /app/client
COPY package*.json ./
RUN npm install
COPY . .
FROM develop-stage as build-stage
RUN npm run build
COPY --from=build-stage /app/client/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
