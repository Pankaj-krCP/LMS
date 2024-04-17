import { Request, Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import courseDataModel, { ICourseData } from "../../models/courseData.model";
import errorHandler from "../../utils/errorHandler.helper";

export const updateCourseData = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const courseDataId = req.params.id;
      const courseData: ICourseData = req.body;

      if (!courseDataId) {
        throw new errorHandler("Please provide courseDataId", 400);
      }

      const updatedCourseData = await courseDataModel.findByIdAndUpdate(
        courseDataId,
        courseData,
        { new: true }
      );

      if (!updatedCourseData) {
        throw new errorHandler("Not able to update", 401);
      }

      res.status(200).json({
        success: true,
        data: { course: updatedCourseData },
        message: "Course data added successfully to the section",
      });
    } catch (error) {
      return next(error);
    }
  }
);
