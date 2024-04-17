import { Request, Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import courseModel from "../../models/course.model";
import errorHandler from "../../utils/errorHandler.helper";

export const updateCourseSection = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { courseId, sectionId } = req.params;
      const { title } = req.body;

      const course = await courseModel.findById(courseId);
      if (!course) {
        throw new errorHandler("Course not found", 404);
      }

      const sectionIndex = course.sections.findIndex(
        (section) => section._id?.toString() === sectionId
      );
      if (sectionIndex === -1) {
        throw new errorHandler("Section not found in the course", 404);
      }

      const updatedTitle = await courseModel.updateOne(
        { _id: courseId },
        { $set: { "sections.$[updateSection].title": title } },
        {
          arrayFilters: [{ "updateSection._id": sectionId }],
        }
      );

      if (!updatedTitle) {
        throw new errorHandler("Section not found in the course", 404);
      }

      const updatedCourse = await courseModel
        .findById(courseId)
        .populate("sections.courseData");

      res.status(200).json({
        success: true,
        data: { course: updatedCourse },
        message: "Section Updated Successfully",
      });
    } catch (error) {
      return next(error);
    }
  }
);
