import { Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import { CustomRequest } from "../../utils/customRequest.helper";
import errorHandler from "../../utils/errorHandler.helper";
import { validateMongodbId } from "../../utils/validateMongodbId.helper";
import commentModel from "../../models/comment.model";

export const updateComment = catchAsyncError(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const commentId = req.params.commentId;
      const { comment } = req.body;
      const user = req.user;

      if (!comment) {
        throw new errorHandler("Comment is required", 400);
      }

      if (!validateMongodbId(commentId)) {
        throw new errorHandler("Invalid comment id", 401);
      }

      const findComment = await commentModel.findById(commentId);
      if (!findComment) {
        throw new errorHandler("comment not found", 404);
      }

      if (findComment.user.toString() !== user._id) {
        throw new errorHandler("You have not access to update", 401);
      }

      const updatedComment = await commentModel.findByIdAndUpdate(
        commentId,
        {
          comment: comment,
        },
        { new: true }
      );

      res.status(200).json({
        succes: true,
        data: { comment: updatedComment },
        messgae: "Comment updated successfully",
      });
    } catch (error) {
      throw next(error);
    }
  }
);
