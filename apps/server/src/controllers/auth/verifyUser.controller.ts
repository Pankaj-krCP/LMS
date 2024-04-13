import { Request, Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import userModel from "../../models/user.modal";
import errorHandler from "../../utils/errorHandler.helper";

export const verifyUser = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body;
      if (!email) {
        throw new errorHandler("Email is required", 400);
      }

      const updatedUser = await userModel.findOneAndUpdate(
        { email },
        { $set: { isVerified: true } }
      );

      if (!updatedUser) {
        throw new errorHandler("Not able to verify user", 401);
      }

      const responseUser = await userModel
        .findOne({ email })
        .select("-password -refreshToken");
      res.status(200).json({
        success: true,
        data: { user: responseUser },
        message: "User Verified Successfully",
      });
    } catch (error) {
      return next(error);
    }
  }
);
