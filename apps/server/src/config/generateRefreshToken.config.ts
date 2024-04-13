import jwt, { Secret } from "jsonwebtoken";

export const generateRefreshToken = (_id: string) => {
  return jwt.sign({ _id }, process.env.JWT_REFRESH_SECRET as Secret, {
    expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRY,
  });
};
