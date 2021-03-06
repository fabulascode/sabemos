import { RedisPubSub } from "graphql-redis-subscriptions";
import Redis from "ioredis";

const options = {
  host: "redis",
  port: 6379,
  retry_strategy: options => {
    return Math.max(options.attempt * 100, 3000);
  }
};

export const pubsub = new RedisPubSub({
  publisher: new Redis(options),
  subscriber: new Redis(options)
});
