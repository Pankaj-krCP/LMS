import mongoose, { Document, Model, Schema } from "mongoose";

export interface ICourseData extends Document {
  title: string;
  description: string;
  videoUrl: string;
  videoThumbnail: { type: mongoose.Types.ObjectId; ref: "Thumbnail" };
  videoSection: string;
  videoLength: number;
  videoPlayer: string;
  links: [{ type: mongoose.Types.ObjectId; ref: "Link" }];
  suggestion: string;
  questions: [{ type: mongoose.Types.ObjectId; ref: "Comment" }];
}

const courseDataSchema = new Schema<ICourseData>({
  videoUrl: { type: String, required: true },
  videoThumbnail: { type: mongoose.Types.ObjectId, ref: "Thumbnail" },
  title: { type: String, required: true },
  videoSection: { type: String, required: true },
  description: { type: String, required: true },
  videoLength: { type: Number, required: true },
  videoPlayer: { type: String, required: true },
  links: [{ type: mongoose.Types.ObjectId, ref: "Link" }],
  suggestion: { type: String },
  questions: [{ type: mongoose.Types.ObjectId, ref: "Comment" }],
});

const courseDataModel: Model<ICourseData> = mongoose.model(
  "CourseData",
  courseDataSchema
);

export default courseDataModel;
