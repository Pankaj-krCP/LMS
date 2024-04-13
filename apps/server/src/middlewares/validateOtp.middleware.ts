import { Request, Response, NextFunction } from "express";
import catchAsyncError from "./catchAsyncError.middleware";
import errorHandler from "../utils/errorHandler.helper";
import userModel from "../models/user.modal";
import otpModel from "../models/otp.model";

export const validateOtp = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, otp } = req.body;

      if (!email) {
        throw new errorHandler("Email is required", 400);
      }

      const user = await userModel.findOne({ email });
      if (!user) {
        throw new errorHandler("User not exist with this email", 401);
      }
      const otpWithUser = await otpModel.findOne({ email });
      if (!otpWithUser) {
        throw new errorHandler("OTP Expired", 401);
      }

      const isOtpMatched = await otpWithUser.isOtpMatched(otp);
      if (!isOtpMatched) {
        throw new Error("Entered otp is wrong");
      }

      await otpModel.findOneAndDelete({ email });
      next();
    } catch (error) {
      return next(error);
    }
  }
);
