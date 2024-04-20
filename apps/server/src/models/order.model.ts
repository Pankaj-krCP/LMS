import mongoose, { Document, Schema } from "mongoose";

export interface IOrder extends Document {
  course: { type: mongoose.Types.ObjectId; ref: "Course" };
  user: { type: mongoose.Types.ObjectId; ref: "User" };
  payment_info: any;
}

const orderSchema = new Schema<IOrder>({
  course: { type: mongoose.Types.ObjectId, ref: "Course", required: true },
  user: { type: mongoose.Types.ObjectId, ref: "User", required: true },
  payment_info: {
    type: Schema.Types.Mixed,
    required: true,
  },
});

const orderModel = mongoose.model("Order", orderSchema);

export default orderModel;
