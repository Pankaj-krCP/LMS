import { Request, Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import courseModel from "../../models/course.model";
import errorHandler from "../../utils/errorHandler.helper";

export const getAllCourse = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allCourse = await courseModel.find();

      if (!allCourse) {
        throw new errorHandler("Not able to fetched Course", 500);
      }

      res.status(200).json({
        success: true,
        data: { courses: allCourse },
        message: "Course fetched Succesfully",
      });
    } catch (error) {
      return next(error);
    }
  }
);
