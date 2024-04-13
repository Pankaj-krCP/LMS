import { Response, NextFunction } from "express";
import catchAsyncError from "./catchAsyncError.middleware";
import jwt, { Secret } from "jsonwebtoken";
import errorHandler from "../utils/errorHandler.helper";
import userModel, { IUser } from "../models/user.modal";
import { Document } from "mongoose";
import { CustomRequest } from "../utils/customRequest.helper";

export const isLogin = catchAsyncError(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const accessToken =
        req.cookies?.accessToken || req?.headers?.authorization?.split(" ")[1];

      if (!accessToken) {
        throw new errorHandler("There is no token attached", 400);
      }

      const decodedToken = jwt.verify(
        accessToken,
        process.env.JWT_ACCESS_SECRET as Secret
      );

      if (!decodedToken) {
        throw new errorHandler(
          "Tokoen has been expired, please login again",
          401
        );
      }

      const findUser = (await userModel.findById(
        typeof decodedToken !== "string" ? decodedToken?._id.toString() : ""
      )) as Document<IUser>;

      if (!findUser) {
        throw new errorHandler("User not exist", 404);
      }

      req.user = findUser;
      next();
    } catch (error) {
      return next(error);
    }
  }
);

export const isAdmin = catchAsyncError(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    const user = req.user?.toJSON();
    if (!(user?.role === "admin")) {
      throw new Error("You are not an Admin");
    } else {
      next();
    }
  }
);
