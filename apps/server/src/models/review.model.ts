import mongoose, { Document, Model, Schema } from "mongoose";

interface IReview extends Document {
  user: { type: mongoose.Types.ObjectId; ref: "User" };
  rating: number;
  comment: [{ type: mongoose.Types.ObjectId; ref: "Comment" }];
}

const reviewSchema = new Schema<IReview>({
  user: { type: mongoose.Types.ObjectId, ref: "User" },
  rating: {
    type: Number,
    default: 0,
  },
  comment: [{ type: mongoose.Types.ObjectId, ref: "Comment" }],
});

const ReviewModel: Model<IReview> = mongoose.model("Review", reviewSchema);

export default ReviewModel;
