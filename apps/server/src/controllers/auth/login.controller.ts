import { Request, Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import errorHandler from "../../utils/errorHandler.helper";
import userModel from "../../models/user.modal";
import { generateAccessToken } from "../../config/generateAccessToken.config";
import { generateRefreshToken } from "../../config/generateRefreshToken.config";

interface Ilogin {
  email: string;
  password: string;
}

export const login = catchAsyncError(
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new errorHandler("Email and password is required", 400);
      }

      const loginUser: Ilogin = {
        email,
        password,
      };

      const findUser = await userModel.findOne({ email: loginUser.email });
      if (!findUser) {
        throw new errorHandler("User not exist with this mail", 401);
      }

      if (!(await findUser.isPasswordMatched(loginUser.password))) {
        throw new errorHandler("Password is wrong", 401);
      }

      const accessToken = generateAccessToken(findUser._id.toString());
      const refreshToken = generateRefreshToken(findUser._id.toString());

      const addRefreshTokenToUser = await userModel.findByIdAndUpdate(
        findUser._id,
        {
          $set: { refreshToken: refreshToken },
        }
      );

      const responseUser = await userModel
        .findById(findUser._id)
        .select("-password -refreshToken");

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
            user: findUser,
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
