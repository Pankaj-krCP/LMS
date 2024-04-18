import { Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import { validateMongodbId } from "../../utils/validateMongodbId.helper";
import errorHandler from "../../utils/errorHandler.helper";
import { CustomRequest } from "../../utils/customRequest.helper";
import commentModel from "../../models/comment.model";

export const addReply = catchAsyncError(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const questionId = req.params.questionId;
      const { reply } = req.body;
      const user = req.user;
      if (!validateMongodbId(questionId)) {
        throw new errorHandler("Please provide valid id", 401);
      }

      const data = {
        user: user._id,
        comment: reply,
      };
      const createdReply = await commentModel.create(data);
      const addedReply = await commentModel
        .findByIdAndUpdate(
          questionId,
          {
            $push: { commentReplies: createdReply._id },
          },
          { new: true }
        )
        .populate("commentReplies");

      res.status(200).json({
        succes: true,
        data: { question: addedReply },
        message: "Reply added successfully",
      });
    } catch (error) {
      return next(error);
    }
  }
);
