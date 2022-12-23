FROM node:lts-alpine

WORKDIR /usr/src/app

RUN mkdir node_modules && chown -R node:node node_modules

USER node

COPY package*.json npm.* ./

RUN npm

COPY --chown=node:node . .

EXPOSE 3000

CMD [ "npm", "start" ]

