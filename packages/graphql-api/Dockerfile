FROM node:11.4-alpine as builder
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json *.lock ./
RUN yarn --silent
RUN yarn global add nodemon --silent
COPY . ./
EXPOSE 4000

# RUN yarn build

# FROM node:11.4-alpine
# COPY --from=builder /usr/src/app/build /usr/src/app/build
# EXPOSE 4000


