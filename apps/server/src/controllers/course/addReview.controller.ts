import { Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import { CustomRequest } from "../../utils/customRequest.helper";
import commentModel from "../../models/comment.model";
import reviewModel from "../../models/review.model";
import errorHandler from "../../utils/errorHandler.helper";
import { validateMongodbId } from "../../utils/validateMongodbId.helper";
import courseModel from "../../models/course.model";

export const addReview = catchAsyncError(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const courseId = req.params.id;
      const { rating, comment } = req.body;
      const user = req.user;

      if (!validateMongodbId(courseId)) {
        throw new errorHandler("Invalid courseId", 401);
      }

      if (!rating || !comment) {
        throw new errorHandler("rating and comment are required field", 400);
      }

      if (parseFloat(rating) > 5.0) {
        throw new errorHandler("rating should be between 0 to 5", 400);
      }

      const alreadyReviewd = await reviewModel.findOne({ user: user._id });
      if (alreadyReviewd) {
        throw new errorHandler("You have already reiviewd!", 200);
      }

      const commentData = {
        user: user._id,
        comment: comment,
      };
      const createdComment = await commentModel.create(commentData);
      if (!createdComment) {
        throw new errorHandler("not able to create revew", 500);
      }

      const reviewData = {
        user: user._id,
        rating: rating,
        comment: createdComment._id,
      };

      const createdReview = await reviewModel.create(reviewData);
      if (!createdReview) {
        throw new errorHandler("not able to create revew", 500);
      }

      const findCourse = await courseModel.findById(courseId);
      if (!findCourse) {
        throw new errorHandler("Course not found", 404);
      }
      const ratings = findCourse?.ratings || 0;
      const length = findCourse?.reviews.length;
      let updatedRatings = 0;
      updatedRatings = (ratings + parseFloat(rating)) / (length + 1);
      const updatedCourse = await courseModel
        .findByIdAndUpdate(
          courseId,
          {
            $push: { reviews: createdReview._id },
            ratings: updatedRatings,
          },
          { new: true }
        )
        .populate("reviews")
        .populate({
          path: "reviews",
          populate: {
            path: "comment",
          },
        });

      res.status(200).json({
        success: true,
        data: {
          course: updatedCourse,
        },
        message: "Review Added Successfully",
      });
    } catch (error) {
      return next(error);
    }
  }
);
