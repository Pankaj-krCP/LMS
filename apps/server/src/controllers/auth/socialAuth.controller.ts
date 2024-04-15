import { Request, Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import errorHandler from "../../utils/errorHandler.helper";
import userModel from "../../models/user.modal";
import { generateAccessToken } from "../../config/generateAccessToken.config";
import { generateRefreshToken } from "../../config/generateRefreshToken.config";
import { setRedisUser } from "../../utils/setRedis.helper";

interface ISocialAuthBody {
  name: string;
  email: string;
  avatar: string;
}

export const socialAuth = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, avatar } = req.body as ISocialAuthBody;

      if (!email || !name || !avatar) {
        throw new errorHandler("Email, name & avatar is required", 400);
      }

      const createUser: ISocialAuthBody = {
        name,
        email,
        avatar,
      };

      let findUser = await userModel.findOne({ email: createUser.email });

      if (!findUser) {
        findUser = await userModel.create(findUser);
      }

      const accessToken = generateAccessToken(findUser._id.toString());
      const refreshToken = generateRefreshToken(findUser._id.toString());

      const responseUser = await userModel.findOneAndUpdate(
        { _id: findUser._id },
        {
          $set: {
            refreshToken: refreshToken,
            avatar: { public_id: "", url: createUser?.avatar },
          },
        },
        { new: true, select: "-password -refreshToken" }
      );

      setRedisUser(responseUser);

      const options = {
        httpOnly: true,
        secure: true,
      };

      res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json({
          success: true,
          data: {
            user: responseUser,
            accessToken,
            refreshToken,
          },
          message: "login Successfully",
        });
    } catch (error) {
      return next(error);
    }
  }
);
