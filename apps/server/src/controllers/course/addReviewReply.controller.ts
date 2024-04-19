import { Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import { CustomRequest } from "../../utils/customRequest.helper";
import errorHandler from "../../utils/errorHandler.helper";
import { validateMongodbId } from "../../utils/validateMongodbId.helper";
import commentModel from "../../models/comment.model";
import reviewModel from "../../models/review.model";

export const addReviewReply = catchAsyncError(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const reviewId = req.params.reviewId;
      const { comment } = req.body;
      const user = req.user;

      if (!comment) {
        throw new errorHandler("comment is required", 400);
      }

      if (!validateMongodbId(reviewId)) {
        throw new errorHandler("Invalid reviewId", 400);
      }

      const createdComment = await commentModel.create({
        user: user._id,
        comment: comment,
      });

      if (!comment) {
        throw new errorHandler("Not abe to create comment", 500);
      }

      const findReview = await reviewModel.findById(reviewId);
      if (!findReview) {
        throw new errorHandler("Review Not Found", 404);
      }

      const updatedComment = await commentModel.findByIdAndUpdate(
        findReview.comment,
        {
          $push: { commentReplies: createdComment._id },
        }
      );

      const updatedReview = await reviewModel
        .findById(reviewId)
        .populate("comment")
        .populate({
          path: "comment",
          populate: {
            path: "commentReplies",
          },
        });

      res.status(200).json({
        success: true,
        data: { review: updatedReview },
        message: "reply added succesfully",
      });
    } catch (error) {
      throw next(error);
    }
  }
);
