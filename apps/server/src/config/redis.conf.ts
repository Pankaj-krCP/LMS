import Redis from "ioredis";
import "dotenv/config";

const redisClient = () => {
  if (process.env.REDIS_URL) {
    const client = new Redis(process.env.REDIS_URL);
    return client;
  }
  throw new Error("Redis COnnection Failed");
};

export const redis = redisClient();
