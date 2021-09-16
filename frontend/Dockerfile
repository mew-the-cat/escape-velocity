FROM node:14.17.6-alpine

WORKDIR /app

COPY ["frontend/package.json", "frontend/package-lock.json*", "./"]

RUN npm install --silent

COPY frontend/ .

CMD ["npm","start"]