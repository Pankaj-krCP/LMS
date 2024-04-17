import { Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import { CustomRequest } from "../../utils/customRequest.helper";
import userModel from "../../models/user.modal";
import { setRedisUser } from "../../utils/setRedis.helper";

interface IUpdateBody {
  name: string;
}

export const updateUser = catchAsyncError(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const { name } = req.body as IUpdateBody;
      const user = req.user;

      const findUser = await userModel
        .findByIdAndUpdate(user._id, { name: name }, { new: true })
        .select("-password -refreshToken");

      setRedisUser(findUser);

      res.status(200).json({
        success: true,
        data: { user: findUser },
        message: "User updated Successfully",
      });
    } catch (error) {
      return next(error);
    }
  }
);
