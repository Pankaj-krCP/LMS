import path from "path";
import { NextFunction, Request, Response } from "express";
import ejs from "ejs";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import userModel from "../../models/user.modal";
import otpModel from "../../models/otp.model";
import sendMail from "../../utils/sendMail.helper";
import errorHandler from "../../utils/errorHandler.helper";

interface IOtpWithUser {
  email: string;
  otp: string;
}

export const generateOtp = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body;

      if (!email) {
        throw new errorHandler("Email is required", 400);
      }

      const user = await userModel.findOne({ email: email });
      if (!user) {
        throw new errorHandler("User not exist with this email", 401);
      }

      let otp = Math.floor(1000 + Math.random() * 9000).toString();
      const otpWithUser: IOtpWithUser = {
        email,
        otp,
      };

      await otpModel.findOneAndDelete({ email: otpWithUser.email });
      const addedOtpWithUser = await otpModel.create(otpWithUser);
      if (!addedOtpWithUser) {
        throw new errorHandler("Not able to store otp", 401);
      }

      const data = { name: user.name, otp };
      const html: string = await ejs.renderFile(
        path.join(__dirname, "../../../src/mails/activation-mail.ejs"),
        data
      );
      try {
        await sendMail({
          email: user.email,
          subject: "Verify Otp",
          html,
        });
      } catch (error) {
        return next(error);
      }

      res.status(201).json({
        success: true,
        message: `Please check you mail ${user.email} to activate your acount!`,
      });
    } catch (error) {
      return next(error);
    }
  }
);
