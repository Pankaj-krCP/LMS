import { Request, Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import courseDataModel, { ICourseData } from "../../models/courseData.model";
import courseModel from "../../models/course.model";
import errorHandler from "../../utils/errorHandler.helper";

export const createCourseData = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { courseId, sectionId } = req.params;
      const courseData: ICourseData = req.body;

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

      const createdCourseData = await courseDataModel.create(courseData);
      course.sections[sectionIndex]?.courseData.push(createdCourseData._id);
      await course.save();

      const updatedCourse = await courseModel
        .findById(courseId)
        .populate("sections.courseData");

      res.status(200).json({
        success: true,
        data: { course: updatedCourse },
        message: "Course data added successfully to the section",
      });
    } catch (error) {
      return next(error);
    }
  }
);
