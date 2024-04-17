import { Request, Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import CourseModel from "../../models/course.model";
import errorHandler from "../../utils/errorHandler.helper";

export const updateCourse = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    const course = req.body;
    const courseId = req.params.id;
    if (!courseId) {
      throw new errorHandler("course id is required", 400);
    }
    const updatedCourse = await CourseModel.findByIdAndUpdate(
      courseId,
      course,
      { new: true }
    );
    res.status(200).json({
      success: true,
      data: { course: updatedCourse },
      message: "Course updated successfully",
    });
    try {
    } catch (error) {
      return next(error);
    }
  }
);
