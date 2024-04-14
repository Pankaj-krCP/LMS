import { Request, Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import errorHandler from "../../utils/errorHandler.helper";
import userModel from "../../models/user.modal";
import { hashedPassword } from "../../config/hashedPassword.config";

interface IReqBody {
  email: string;
  password: string;
  confirmPassword: string;
}

export const resetPassword = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password, confirmPassword } = req.body as IReqBody;

      if (!email || !password || !confirmPassword) {
        throw new errorHandler("Email and password is required", 400);
      }

      if (password !== confirmPassword) {
        throw new errorHandler("Password & confirmPassword are not same", 401);
      }

      const findUser = await userModel.findOne({ email: email });
      if (!findUser) {
        throw new errorHandler("User not exist with this mail", 401);
      }

      const hashPassword = await hashedPassword(password);

      await userModel.findOneAndUpdate(
        { email: email },
        { $set: { password: hashPassword } }
      );

      res
        .status(200)
        .json({ success: true, message: "Reset Password Succefully" });
    } catch (error) {
      return next(error);
    }
  }
);
