FROM node:14.17.6-alpine

WORKDIR /app

COPY ["backend/package.json", "backend/package-lock.json*", "./"]

RUN npm install --silent

COPY backend/ .

CMD ["npm","start"]
