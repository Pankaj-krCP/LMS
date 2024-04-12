import path from "path";
import { NextFunction, Request, Response } from "express";
import ejs from "ejs";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import errorHandler from "../../utils/errorHandler.helper";
import userModel from "../../models/user.modal";
import otpModel from "../../models/otp.model";
import sendMail from "../../utils/sendMail.helper";

interface IOtpWithUser {
  name: string;
  email: string;
  password: string;
  otp: string;
}

export const generateOtp = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body;

      const emailExist = await userModel.findOne({ email });
      if (emailExist) {
        throw new errorHandler("Email already Exist", 409);
      }

      let otp, result;
      do {
        otp = Math.floor(1000 + Math.random() * 9000).toString();
        result = await otpModel.findOne({ otp: otp });
      } while (result);

      const user: IOtpWithUser = {
        name,
        email,
        password,
        otp,
      };
      const alreadyAdded = await otpModel.findOneAndDelete({
        email: user.email,
      });
      const addedOtpWithUser = await otpModel.create(user);
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
          subject: "Activate Your Account",
          html,
        });
      } catch (error) {
        return next(error);
      }

      res.status(201).json({
        sucess: true,
        message: `Please check you mail ${user.email} to activate your acount!`,
      });
    } catch (error) {
      return next(error);
    }
  }
);
