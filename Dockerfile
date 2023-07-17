FROM node:18.14.2-alpine

WORKDIR /app/

COPY . .

RUN npm install --production
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]