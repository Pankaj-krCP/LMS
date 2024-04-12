import { NextFunction, Request, Response } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import errorHandler from "../../utils/errorHandler.helper";
import userModel from "../../models/user.modal";
import otpModel from "../../models/otp.model";

interface ISignup {
  name: string;
  email: string;
  password: string;
}

export const signup = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, otp } = req.body;

      const emailExist = await userModel.findOne({ email });
      if (emailExist) {
        throw new errorHandler("Email already exist", 409);
      }

      const userWithOtp = await otpModel.findOne({ email: email });
      if (!userWithOtp) {
        throw new errorHandler("Otp has expired", 401);
      }

      const validateOtp = await userWithOtp.isOtpMatched(otp);
      if (!validateOtp) {
        throw new errorHandler("Wrong otp", 401);
      }

      const SignupUser: ISignup = {
        name: userWithOtp.name,
        email: userWithOtp.email,
        password: userWithOtp.password,
      };

      const userCreated = await userModel.create(SignupUser);
      if (!userCreated) {
        throw new Error("Not able to Create User");
      }

      const deletedFromOtp = await otpModel.deleteOne({
        email: userCreated.email,
      });

      res.status(201).json({
        sucess: true,
        user: userCreated,
      });
    } catch (error) {
      return next(error);
    }
  }
);
