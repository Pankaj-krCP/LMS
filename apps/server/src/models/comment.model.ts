import mongoose, { Document, Model, Schema } from "mongoose";

export interface IComment extends Document {
  user: { type: mongoose.Types.ObjectId; ref: "User" };
  comment: string;
  commentReplies: IComment[];
}

const commentSchema = new Schema<IComment>({
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  comment: { type: String, required: true },
  commentReplies: [{ type: mongoose.Types.ObjectId, ref: "Comment" }],
});

const commentModel: Model<IComment> = mongoose.model("Comment", commentSchema);

export default commentModel;
