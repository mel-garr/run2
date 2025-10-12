FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY script_frontend.sh .

RUN chmod +x script_frontend.sh

CMD ["sh", "./script_frontend.sh"]