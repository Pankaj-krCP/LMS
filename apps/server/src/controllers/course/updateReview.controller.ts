import { Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import { CustomRequest } from "../../utils/customRequest.helper";
import { validateMongodbId } from "../../utils/validateMongodbId.helper";
import errorHandler from "../../utils/errorHandler.helper";
import reviewModel from "../../models/review.model";
import courseModel from "../../models/course.model";
import commentModel from "../../models/comment.model";

export const updateReview = catchAsyncError(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const { courseId, reviewId } = req.params;
      const { rating, comment } = req.body;
      const user = req.user;

      if (!rating || !comment) {
        throw new errorHandler("rating and comment are required", 400);
      }

      if (!validateMongodbId(reviewId)) {
        throw new errorHandler("Invalid review id", 401);
      }
      if (!validateMongodbId(courseId)) {
        throw new errorHandler("Invalid course id", 401);
      }

      const findReview = await reviewModel.findById(reviewId);
      if (!findReview) {
        throw new errorHandler("Review not found", 401);
      }

      if (findReview.user.toString() !== user._id) {
        throw new errorHandler("You have not access to update it", 401);
      }

      const findCourse = await courseModel.findById(courseId);
      const ratings = findCourse?.ratings || 0;
      const length = findCourse?.reviews.length || 0;
      const updatedRatings =
        (ratings - findReview?.rating + parseFloat(rating)) / length;

      const updatedComment = await commentModel.findByIdAndUpdate(
        findReview.comment,
        { comment: comment }
      );

      const updatedReview = await reviewModel
        .findByIdAndUpdate(
          reviewId,
          {
            rating: rating,
          },
          { new: true }
        )
        .populate("comment");

      await courseModel.findByIdAndUpdate(courseId, {
        ratings: updatedRatings,
      });

      res.status(200).json({
        success: true,
        data: { review: updatedReview },
        message: "Review updated successfully",
      });
      res.status(200).json({});
    } catch (error) {
      return next(error);
    }
  }
);
