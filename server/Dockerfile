FROM node:13
WORKDIR /app/server
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000/tcp
CMD [ "node", "dist/main.js" ]
