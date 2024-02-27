FROM 

WORKDIR /usr/src/app

COPY ./package.json .

RUN npm run install

COPY . .

CMD [ "npm", "run", "start" ]