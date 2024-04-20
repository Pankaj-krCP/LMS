import mongoose, { Schema } from "mongoose";

export interface INotification extends Document {
  user: { type: mongoose.Types.ObjectId; ref: "User" };
  title: string;
  message: string;
  status: string;
}

const notificationSchema = new Schema<INotification>(
  {
    user: { tytpe: mongoose.Types.ObjectId, ref: "User", required: true },
    title: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "unread",
    },
  },
  { timestamps: true }
);

const notificationModel = mongoose.model("Notification", notificationSchema);
export default notificationModel;
