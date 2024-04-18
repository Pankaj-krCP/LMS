import { Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import { CustomRequest } from "../../utils/customRequest.helper";
import { validateMongodbId } from "../../utils/validateMongodbId.helper";
import errorHandler from "../../utils/errorHandler.helper";
import commentModel from "../../models/comment.model";

export const updateReply = catchAsyncError(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const replyId = req.params.replyId;
      const { reply } = req.body;
      const user = req.user;

      if (!validateMongodbId(replyId)) {
        throw new errorHandler("replyId is not valid", 401);
      }
      const findReply = await commentModel.findById(replyId);
      if (!findReply) {
        throw new errorHandler("This reply doesn't exist", 401);
      }

      if (findReply.user.toString() !== user._id) {
        throw new errorHandler("You have not access to do this", 401);
      }

      const updatedReply = await commentModel.findByIdAndUpdate(
        replyId,
        { comment: reply },
        { new: true }
      );

      res.status(200).json({
        success: true,
        data: { reply: updatedReply },
        message: "Reply updated Successfully",
      });
    } catch (error) {
      return next(error);
    }
  }
);
