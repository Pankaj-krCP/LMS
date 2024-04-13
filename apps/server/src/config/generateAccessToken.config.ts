import jwt, { Secret } from "jsonwebtoken";

export const generateAccessToken = (_id: string) => {
  return jwt.sign({ _id }, process.env.JWT_ACCESS_SECRET as Secret, {
    expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRY,
  });
};
