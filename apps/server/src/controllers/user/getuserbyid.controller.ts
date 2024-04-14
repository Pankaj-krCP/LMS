import { Request, Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import errorHandler from "../../utils/errorHandler.helper";
import userModel from "../../models/user.modal";

interface IReqBody {
  userId: string;
}

export const getUserById = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId } = req.body as IReqBody;
      if (!userId) {
        throw new errorHandler("userId is missing", 200);
      }
      const user = await userModel
        .findById(userId)
        .select("-refreshToken -password");
      if (!user) {
        throw new errorHandler("User Not Exist", 201);
      }

      res.status(200).json({
        success: true,
        data: { user },
        message: "User data feteched successfully",
      });
    } catch (error) {
      return next(error);
    }
  }
);
