import mongoose, { Document, Model, Schema } from "mongoose";

interface ILink extends Document {
  title: string;
  url: string;
}

const linkSchema = new Schema<ILink>({
  title: { type: String, required: true },
  url: { type: String, required: true },
});

const LinkModel: Model<ILink> = mongoose.model("Link", linkSchema);

export default LinkModel;
