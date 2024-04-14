import { redis } from "../config/redis.conf";
import errorHandler from "./errorHandler.helper";

export const getRedisUser = async (userId: any) => {
  if (userId) {
    const user = await redis.get(userId);
    const userData = await JSON.parse(user as string);
    return userData;
  } else {
    throw new errorHandler("Not able to get user from redis", 401);
  }
};
