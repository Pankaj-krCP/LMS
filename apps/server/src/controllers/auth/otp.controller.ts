import path from "path";
import { NextFunction, Request, Response } from "express";
import ejs from "ejs";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import userModel from "../../models/user.modal";
import otpModel from "../../models/otp.model";
import sendMail from "../../utils/sendMail.helper";

interface IOtpWithUser {
  email: string;
  otp: string;
}

export const generateOtp = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body;

      const user = await userModel.findOne({ email: email });
      if (!user) {
        throw new Error("User Not Exist");
      }

      let otp = Math.floor(1000 + Math.random() * 9000).toString();
      const otpWithUser: IOtpWithUser = {
        email,
        otp,
      };

      await otpModel.findOneAndDelete({ email: otpWithUser.email });
      const addedOtpWithUser = await otpModel.create(otpWithUser);
      if (!addedOtpWithUser) {
        throw new Error("Not able to store otp");
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

export const verifyOtp = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, otp } = req.body;
      const user = await userModel.findOne({ email });
      if (!user) {
        throw new Error("User Not Exist");
      }
      const otpWithUser = await otpModel.findOne({ email });
      if (!otpWithUser) {
        throw new Error("OTP Expired");
      }
      const isOtpMatched = await otpWithUser.isOtpMatched(otp);
      if (!isOtpMatched) {
        throw new Error("Entered otp is wrong");
      }

      await otpModel.findOneAndDelete({ email });
      await userModel.updateOne({ email }, { $set: { isVerified: true } });

      res
        .status(200)
        .json({ success: true, message: "otp verified successfully" });
    } catch (error) {
      return next(error);
    }
  }
);
