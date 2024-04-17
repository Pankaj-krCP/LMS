import { Request, Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import errorHandler from "../../utils/errorHandler.helper";
import courseModel from "../../models/course.model";

export const addCourseSection = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const courseId = req.params.id;
      const { title } = req.body;
      if (!courseId) {
        throw new errorHandler("CourseId is required", 400);
      }
      if (!title) {
        throw new errorHandler("Title is required", 400);
      }
      const addedSection = await courseModel.findByIdAndUpdate(
        courseId,
        {
          $push: { sections: { title } },
        },
        { new: true }
      );

      if (!addedSection) {
        throw new errorHandler("Course Not found", 401);
      }

      res.status(200).json({
        success: true,
        data: { course: addedSection },
        message: "Section Added Successfully",
      });
    } catch (error) {
      return next(error);
    }
  }
);
