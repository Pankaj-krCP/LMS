import { Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import errorHandler from "../../utils/errorHandler.helper";
import { validateMongodbId } from "../../utils/validateMongodbId.helper";
import commentModel from "../../models/comment.model";
import { CustomRequest } from "../../utils/customRequest.helper";

export const updateQuestion = catchAsyncError(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const questionId = req.params.questionId;
      const { question } = req.body;
      const user = req.user;
      if (!questionId) {
        throw new errorHandler("questionId is required", 400);
      }

      if (!validateMongodbId(questionId)) {
        throw new errorHandler("questionId is not valid", 401);
      }
      const findQuestion = await commentModel.findById(questionId);
      if (!findQuestion) {
        throw new errorHandler("This question doesn't exist", 401);
      }

      if (findQuestion.user.toString() !== user._id) {
        throw new errorHandler(
          "You have not access to update this question",
          401
        );
      }

      const updatedQuestion = await commentModel.findByIdAndUpdate(
        questionId,
        {
          comment: question,
        },
        {
          new: true,
        }
      );

      res.status(200).json({
        succes: true,
        data: { updatedQuestion },
        message: "Question updated successfully",
      });
    } catch (error) {
      return next(error);
    }
  }
);
