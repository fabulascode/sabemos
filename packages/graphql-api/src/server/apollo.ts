import { ApolloServer, gql } from "apollo-server-express";
import { RedisCache } from "apollo-server-cache-redis";
import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";
import { applyMiddleware } from "graphql-middleware";
import { Prisma } from "../../prisma/prisma-client";
import datamodelInfo from "../../prisma/generated/nexus-prisma";
import { idArg, queryType, stringArg } from "nexus";
import { makePrismaSchema, prismaObjectType } from "nexus-prisma";
import * as path from "path";
import { permissions } from "./middleware";

export const db: Prisma = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT || "http://prisma:4466"
});

const typeDefs: any = importSchema(
  path.resolve(__dirname, "../schema.graphql")
);

const Query = prismaObjectType({
  name: "Query",
  definition: t => t.prismaFields(["*"])
});

const Mutation = prismaObjectType({
  name: "Mutation",
  definition: t => t.prismaFields(["*"])
});

const schema = makePrismaSchema({
  types: [Query, Mutation],
  prisma: {
    datamodelInfo,
    client: db
  },
  outputs: {
    schema: path.join(__dirname, "./generated.schema.graphql"),
    typegen: path.join(__dirname, "./generated/nexus.ts")
  }
});

// const schema = applyMiddleware(
//   makeExecutableSchema({
//     typeDefs,
//     resolvers
//   }),
//   permissions
// );

export const graphqlServer = new ApolloServer({
  schema,

  introspection: true,
  tracing: true,
  context: async request => {
    return {
      ...request,
      prisma: db
    };
  },
  cache: new RedisCache({
    host: "redis",
    port: 6379
  })
});
