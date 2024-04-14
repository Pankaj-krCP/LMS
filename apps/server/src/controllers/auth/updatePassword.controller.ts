import { Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import errorHandler from "../../utils/errorHandler.helper";
import userModel from "../../models/user.modal";
import { hashedPassword } from "../../config/hashedPassword.config";
import { CustomRequest } from "../../utils/customRequest.helper";

interface IReqBody {
  password: string;
  confirmPassword: string;
}

export const updatePassword = catchAsyncError(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const { password, confirmPassword } = req.body as IReqBody;
      const user = req.user;

      if (!password || !confirmPassword) {
        throw new errorHandler("password is required", 400);
      }

      if (password !== confirmPassword) {
        throw new errorHandler("Password & confirmPassword are not same", 401);
      }

      const hashPassword = await hashedPassword(password);

      await userModel.findOneAndUpdate(
        { _id: user._id },
        { $set: { password: hashPassword } }
      );

      res
        .status(200)
        .json({ success: true, message: "Update Password Succefully" });
    } catch (error) {
      return next(error);
    }
  }
);
