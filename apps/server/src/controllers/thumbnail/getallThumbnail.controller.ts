import { Request, Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import thumbnailModel from "../../models/thumbnail.model";
import errorHandler from "../../utils/errorHandler.helper";

export const getAllThumbnail = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const allThumbnail = await thumbnailModel.find();

      if (!allThumbnail) {
        throw new errorHandler("Not able to fetched THumbnail", 500);
      }

      res.status(200).json({
        success: true,
        data: { thumbnails: allThumbnail },
        message: "Thumbnail fetched Succesfully",
      });
    } catch (error) {
      return next(error);
    }
  }
);
