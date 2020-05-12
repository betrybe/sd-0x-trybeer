FROM node:lts-alpine

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home

WORKDIR /home/node/api

COPY package.json yarn.* ./

USER node

RUN yarn

# Bundle app source
COPY . .

EXPOSE 3001

ENTRYPOINT [ "./entrypoint.sh" ]

