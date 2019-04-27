const express = require("express");
import { express as voyagerMiddleware } from "graphql-voyager/middleware";
import { graphqlServer } from "./apollo";
import { config } from "./config";
const http = require("http");
const app = express();

app.use("/voyager", voyagerMiddleware({ endpointUrl: "/graphql" }));

graphqlServer.applyMiddleware({ app, path: "/" });

const server = http.createServer(app);

graphqlServer.installSubscriptionHandlers(server);

export const run = () => {
  server.listen({ port: config.port }, () => {
    console.log(
      `🚀 Server ready at`,
      `http${config.ssl ? "s" : ""}://${config.hostname}:${config.port}${
        graphqlServer.graphqlPath
      }`
    );
    console.log(
      `🚀 Subscription Server ready at`,
      ` ws://${config.hostname}:${config.port}${
        graphqlServer.subscriptionsPath
      }`
    );
  });
};
