import { Request, Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import errorHandler from "../../utils/errorHandler.helper";
import userModel from "../../models/user.modal";
import { redis } from "../../config/redis.conf";

export const logout = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const refreshToken =
        req.cookies?.refreshToken || req?.headers?.authorization?.split(" ")[1];
      if (!refreshToken) {
        throw new errorHandler("Refresh token is not attached", 400);
      }

      const user = await userModel.findOne({ refreshToken });
      if (!user) {
        throw new errorHandler("user Not exitst with this token", 401);
      }

      await userModel.findOneAndUpdate(
        { refreshToken },
        {
          refreshToken: "",
        }
      );
      redis.del(user?.id);

      const options = {
        httpOnly: true,
        secure: true,
      };

      return res
        .status(204)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json({
          success: true,
          message: "logged out successfully",
        }); //forbidden
    } catch (error) {
      return next(error);
    }
  }
);
