import { Request, Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import { cloudinaryUpload } from "../../utils/cloudinary.helper";
import errorHandler from "../../utils/errorHandler.helper";
import thumbnailModel from "../../models/thumbnail.model";

export const uploadThumbnail = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const file = req.file;
      if (!file || !file.path) {
        throw new errorHandler("thumnail not uploaded", 400);
      }
      const path = file.path;
      const result = await cloudinaryUpload(path, { folder: "thumbnail" });

      if (!result) {
        throw new errorHandler(
          "thumnail not able to upload on cloudinary",
          400
        );
      }
      const thumbnail = await thumbnailModel.create(result);
      res.status(200).json({
        success: true,
        data: {
          thumnail: thumbnail,
        },
        message: "Thumbnail uploaded succesfully",
      });
    } catch (error) {
      return next(error);
    }
  }
);
