import mongoose, { Document, Model, Schema } from "mongoose";

interface IReview extends Document {
  user: { type: mongoose.Types.ObjectId; ref: "User" };
  rating: number;
  comment: { type: mongoose.Types.ObjectId; ref: "Comment" };
}

const reviewSchema = new Schema<IReview>({
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  rating: {
    type: Number,
    default: 0,
    required: true,
  },
  comment: { type: mongoose.Types.ObjectId, ref: "Comment", required: true },
});

const reviewModel: Model<IReview> = mongoose.model("Review", reviewSchema);

export default reviewModel;
