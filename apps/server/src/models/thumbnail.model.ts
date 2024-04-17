import mongoose, { Document, Model, Schema } from "mongoose";

interface IThumbnail extends Document {
  public_id: string;
  url: string;
}

const thumbnailSchema = new Schema<IThumbnail>({
  public_id: { type: String, required: true },
  url: { type: String, required: true },
});

const thumbnailModel: Model<IThumbnail> = mongoose.model(
  "Thumbnail",
  thumbnailSchema
);
export default thumbnailModel;
