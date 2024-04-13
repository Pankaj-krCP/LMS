import { NextFunction, Request, Response } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import errorHandler from "../../utils/errorHandler.helper";
import userModel from "../../models/user.modal";

interface ISignup {
  name: string;
  email: string;
  password: string;
}

export const signup = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body;

      if (!email || !name || !password) {
        throw new errorHandler("Name, email and password is required", 400);
      }

      const emailExist = await userModel.findOne({ email });
      if (emailExist) {
        throw new errorHandler("Email already exist", 409);
      }

      const SignupUser: ISignup = {
        name: name,
        email: email,
        password: password,
      };
      const userCreated = await userModel.create(SignupUser);
      if (!userCreated) {
        throw new Error("Not able to Create User");
      }

      const responseUser = await userModel
        .findOne({ email })
        .select("-password -refreshToken");

      res.status(200).json({
        success: true,
        data: { user: responseUser },
        message: "User Created Successfully",
      });
    } catch (error) {
      return next(error);
    }
  }
);
