import { Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import { CustomRequest } from "../../utils/customRequest.helper";
import errorHandler from "../../utils/errorHandler.helper";

export const Me = catchAsyncError(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      if (!user) {
        throw new errorHandler("user Not Found", 401);
      }

      res.status(200).json({
        success: true,
        data: { user: user },
        message: "successfully fetched user",
      });
    } catch (error) {
      return next(error);
    }
  }
);
