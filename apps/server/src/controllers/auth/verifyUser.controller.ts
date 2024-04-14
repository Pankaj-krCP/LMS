import { Request, Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import userModel from "../../models/user.modal";
import errorHandler from "../../utils/errorHandler.helper";
import { setRedisUser } from "../../utils/setRedis.helper";

interface IReqBody {
  email: string;
}

export const verifyUser = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email } = req.body as IReqBody;
      if (!email) {
        throw new errorHandler("Email is required", 400);
      }

      const responseUser = await userModel.findOneAndUpdate(
        { email },
        { $set: { isVerified: true } },
        { new: true, select: "-password -refreshToken" }
      );

      if (!responseUser) {
        throw new errorHandler("Not able to verify user", 401);
      }

      setRedisUser(responseUser);

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
