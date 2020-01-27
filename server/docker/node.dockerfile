FROM node:13.7.0-alpine3.11

EXPOSE 5000

WORKDIR /app

VOLUME /app

CMD ["npm","run","start"]