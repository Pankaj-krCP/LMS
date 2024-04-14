import { Request, Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import userModel from "../../models/user.modal";

export const getAllUser = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allUser: any = await userModel
        .find()
        .select("-refreshToken -password");
      res.status(200).json({
        succes: true,
        data: { allUser },
        message: "fetched all users",
      });
    } catch (error) {
      return next(error);
    }
  }
);
