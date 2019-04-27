FROM node:11.4-alpine as builder
WORKDIR /usr/src/app
COPY package.json *.lock ./
RUN yarn
COPY . ./
RUN yarn global add nodemon dotenv ts-node typescript
# RUN yarn build

# FROM node:11.4-alpine
# COPY --from=builder /usr/src/app/build /usr/src/app/build
# EXPOSE 4000


