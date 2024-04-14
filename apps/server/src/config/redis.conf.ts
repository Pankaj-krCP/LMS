import Redis from "ioredis";
import "dotenv/config";

export const redisClient = () => {
  if (process.env.REDIS_URL) {
    const client = new Redis(process.env.REDIS_URL);
    if (client) {
      console.log("redis database connected");
    }
    return client;
  }
  throw new Error("Redis Connection Failed");
};

export const redis = redisClient();
