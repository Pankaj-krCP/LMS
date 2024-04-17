import { Request, Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import errorHandler from "../../utils/errorHandler.helper";
import CourseModel from "../../models/course.model";

export const deleteCourse = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { courseId } = req.body;
      if (!courseId) {
        throw new errorHandler("Please provide courseId", 400);
      }

      const deletedCourse = await CourseModel.deleteOne({
        _id: courseId,
      });

      if (!deletedCourse.acknowledged) {
        throw new errorHandler("Not abe to delete course from db", 500);
      }

      res.status(200).json({
        success: true,
        data: {
          thumnail: deletedCourse,
        },
        message: "Course deleted succesfully",
      });
    } catch (error) {
      return next(error);
    }
  }
);
