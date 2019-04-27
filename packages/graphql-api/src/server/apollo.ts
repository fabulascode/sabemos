import { ApolloServer, gql } from "apollo-server-express";
import { RedisCache } from "apollo-server-cache-redis";

const fakeUsers = [{ id: "1", handle: "Mike" }, { id: "2", handle: "Nat" }];

const resolvers = {
  Query: {
    users: () => fakeUsers
  }
};

export const graphqlServer = new ApolloServer({
  typeDefs: gql`
    type User {
      id: ID!
      handle: String
    }

    type Query {
      users: [User]
    }
  `,
  resolvers,
  mocks: true,
  introspection: true,
  tracing: true,
  cache: new RedisCache({
    host: "redis",
    port: 6379
  })
});
