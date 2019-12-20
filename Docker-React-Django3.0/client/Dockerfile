FROM node:12

WORKDIR /app/

COPY package.json yarn.lock /app/

COPY . /app/

EXPOSE 3000

CMD yarn watch