import { Response, NextFunction } from "express";
import catchAsyncError from "../../middlewares/catchAsyncError.middleware";
import { CustomRequest } from "../../utils/customRequest.helper";
import commentModel from "../../models/comment.model";
import { validateMongodbId } from "../../utils/validateMongodbId.helper";
import errorHandler from "../../utils/errorHandler.helper";
import courseDataModel from "../../models/courseData.model";

export const addQuestion = catchAsyncError(
  async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      const { courseDataId, question } = req.body;
      if (!validateMongodbId(courseDataId)) {
        throw new errorHandler("Invalid Id", 401);
      }
      if (!question) {
        throw new errorHandler("question is required", 400);
      }

      const data = {
        user: user._id,
        comment: question,
      };

      const createdQuestion = await commentModel.create(data);
      if (!createdQuestion) {
        throw new errorHandler("Not able to create question", 500);
      }

      const addedQuestion = await courseDataModel
        .findByIdAndUpdate(
          courseDataId,
          {
            $push: { questions: createdQuestion._id },
          },
          { new: true }
        )
        .populate("questions");

      res.status(200).json({
        success: true,
        data: {
          courseData: addedQuestion,
        },
        message: "Question added successfully",
      });
    } catch (error) {
      return next(error);
    }
  }
);
