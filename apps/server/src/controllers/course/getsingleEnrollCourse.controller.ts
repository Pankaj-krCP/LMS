import { Request, Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import CourseModel from "../../models/course.model";

export const getSingleEnrollCourse = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const courseId = req.params.id;
      const course = await CourseModel.findById(courseId);
      res
        .status(200)
        .json({
          success: true,
          data: { course: course },
          message: "Course fetched successfully",
        });
    } catch (error) {
      return next(error);
    }
  }
);
