FROM --platform=linux/amd64 node:12
## Create app directory
WORKDIR /usr/src/app
## Install app dependencies
## A wildcard is used to ensure both package.json AND package-lock.json are copied where available (npm@5+)
COPY package*.json ./
RUN npm ci 
## Bundle app source
COPY . .

RUN NODE_OPTIONS=--max-old-space-size=8192 npm run tsc

EXPOSE 8080

CMD [ "npm", "run", "prod" ]