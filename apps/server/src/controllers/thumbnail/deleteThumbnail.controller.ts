import { Request, Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import { cloudinaryDelete } from "../../utils/cloudinary.helper";
import errorHandler from "../../utils/errorHandler.helper";
import thumbnailModel from "../../models/thumbnail.model";

export const deleteThumbnail = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { thumbnailId } = req.body;
      if (!thumbnailId) {
        throw new errorHandler("Please provide thumbnailId", 400);
      }

      const thumbnail = await thumbnailModel.findById(thumbnailId);
      if (!thumbnail) {
        throw new errorHandler("Thumnail not found in DB", 500);
      }

      const result = await cloudinaryDelete(thumbnail?.public_id);
      if (result.result !== "ok") {
        throw new errorHandler("Not able to delete from cloudinary", 500);
      }

      const deletedThumbnail = await thumbnailModel.deleteOne({
        _id: thumbnailId,
      });

      if (!deletedThumbnail.acknowledged) {
        throw new errorHandler("Not abe to delete thumbnail from db", 500);
      }

      res.status(200).json({
        success: true,
        data: {
          thumnail: deletedThumbnail,
        },
        message: "Thumbnail deleted succesfully",
      });
    } catch (error) {
      return next(error);
    }
  }
);
