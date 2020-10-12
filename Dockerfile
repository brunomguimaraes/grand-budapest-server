  
FROM node:10.15.3-alpine as builder
WORKDIR /budapest_api
COPY . ./
RUN yarn install
RUN yarn build

FROM node:10.15.3-alpine
WORKDIR /budapest_api
COPY --from=builder /budapest_api ./
RUN yarn install --production=true
EXPOSE 8080
ENTRYPOINT ["yarn", "serve"]