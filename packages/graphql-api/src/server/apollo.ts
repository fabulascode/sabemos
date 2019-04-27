import { ApolloServer, gql } from "apollo-server-express";
import { RedisCache } from "apollo-server-cache-redis";
import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";
import { applyMiddleware } from "graphql-middleware";
import { Prisma } from "../../prisma/prisma-client";
import { idArg, queryType, stringArg } from "nexus";
import { makePrismaSchema, prismaObjectType } from "nexus-prisma";
import * as path from "path";
import { permissions } from "./middleware";

export const db: Prisma = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT || "http://localhost:4466"
});

const typeDefs: any = importSchema(
  path.resolve(__dirname, "../schema.graphql")
);

const fakeUsers = [{ id: "1", handle: "Mike" }, { id: "2", handle: "Nat" }];

const resolvers = {
  Query: {
    users: () => fakeUsers
  }
};

const schema = applyMiddleware(
  makeExecutableSchema({
    typeDefs,
    resolvers
  }),
  permissions
);

export const graphqlServer = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: true,
  introspection: true,
  tracing: true,
  context: async request => {
    return {
      ...request,
      db
    };
  },
  cache: new RedisCache({
    host: "redis",
    port: 6379
  })
});
