import { NextFunction, Response } from "express";
import { CustomRequest } from "../utils/customRequest.helper";
import catchAsyncError from "./catchAsyncError.middleware";
import errorHandler from "../utils/errorHandler.helper";

export const isEnroll = catchAsyncError(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      const courseId = req.params.id;
      if (!courseId) {
        throw new errorHandler("Please provide course id", 400);
      }
      if (user.courses.includes(courseId) || user.role === "admin") {
        next();
        return;
      }
      throw new errorHandler("Enrolled to access this course", 401);
    } catch (error) {
      return next(error);
    }
  }
);
