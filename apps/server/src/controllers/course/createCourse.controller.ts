import { Request, Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";

export const createCourse = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) {
      return next(error);
    }
  }
);
