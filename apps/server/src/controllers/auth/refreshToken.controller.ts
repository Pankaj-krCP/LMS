import { Request, Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import errorHandler from "../../utils/errorHandler.helper";
import jwt, { Secret } from "jsonwebtoken";
import userModel from "../../models/user.modal";
import { generateAccessToken } from "../../config/generateAccessToken.config";

export const refreshToken = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const refreshToken =
        req.cookies?.refreshToken || req?.headers?.authorization?.split(" ")[1];
      if (!refreshToken) {
        throw new errorHandler("Refresh token not found in cookies", 400);
      }

      const user = await userModel.findOne({ refreshToken });
      if (!user) {
        throw new errorHandler("refresh token not found in db", 401);
      }

      const decoded = jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_SECRET as Secret
      );
      if (!decoded) {
        throw new errorHandler(
          "Refresh token has been expired, please login again",
          401
        );
      }

      const accessToken = generateAccessToken(
        typeof decoded !== "string" ? decoded?._id.toString() : ""
      );

      const options = {
        httpOnly: true,
        secure: true,
      };

      res.status(200).cookie("accessToken", accessToken, options).json({
        success: true,
        data: {
          accessToken,
        },
        message: "Access token renewed",
      });
    } catch (error) {
      return next(error);
    }
  }
);
