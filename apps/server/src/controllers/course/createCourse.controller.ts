import { Request, Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import CourseModel, { ICourse } from "../../models/course.model";

export const createCourse = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const course: ICourse = req.body;
    const createdCourse = await CourseModel.create(course);
    res.status(200).json({
      success: true,
      data: { course: createdCourse },
      message: "Course created successfully",
    });
    try {
    } catch (error) {
      return next(error);
    }
  }
);
