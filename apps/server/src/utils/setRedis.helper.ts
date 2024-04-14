import { redis } from "../config/redis.conf";
import errorHandler from "./errorHandler.helper";

export const setRedisUser = async (user: any) => {
  if (user && user._id) {
    const userId = user._id.toString();
    const userData = JSON.stringify(user);
    await redis.set(
      userId,
      userData,
      "EX",
      parseInt(process.env.REDIS_USER_EXPIRY || ""),
      (err, reply) => {
        if (err) {
          throw new errorHandler(`${err}`, 401);
        }
      }
    );
  } else {
    throw new errorHandler("Empty User to set in redis", 401);
  }
};
