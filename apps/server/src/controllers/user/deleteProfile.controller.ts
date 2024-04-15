import { Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import errorHandler from "../../utils/errorHandler.helper";
import { cloudinaryDelete } from "../../utils/cloudinary.helper";
import userModel from "../../models/user.modal";
import { CustomRequest } from "../../utils/customRequest.helper";
import { setRedisUser } from "../../utils/setRedis.helper";

export const deleteProfilePicture = catchAsyncError(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const user = req.user;

      if (!user?.avatar?.public_id) {
        throw new errorHandler("There is no profile photo or auth user", 400);
      }

      await cloudinaryDelete(user?.avatar?.public_id);

      const responseUser = await userModel.findOneAndUpdate(
        { _id: user._id },
        {
          $set: {
            avatar: "",
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
