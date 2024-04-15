import fs from "fs";
import { Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import errorHandler from "../../utils/errorHandler.helper";
import { cloudinaryUpload } from "../../utils/cloudinary.helper";
import userModel from "../../models/user.modal";
import { CustomRequest } from "../../utils/customRequest.helper";
import { setRedisUser } from "../../utils/setRedis.helper";

export const updateProfilePicture = catchAsyncError(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      const file = req.file;
      if (!file) {
        throw new errorHandler("file not uploaded", 400);
      }
      const path = file.path;
      const image = await cloudinaryUpload(path);
      fs.unlinkSync(path);

      const responseUser = await userModel.findOneAndUpdate(
        { _id: user._id },
        {
          $set: {
            avatar: image,
          },
        },
        { new: true, select: "-password -refreshToken" }
      );

      setRedisUser(responseUser);

      res.status(200).json({
        success: true,
        data: { user: responseUser },
        message: "Profile updated successfully",
      });
    } catch (error) {
      return next(error);
    }
  }
);
