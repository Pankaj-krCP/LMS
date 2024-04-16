import mongoose, { Document, Model, Schema } from "mongoose";

interface ICourseData extends Document {
  title: string;
  description: string;
  videoUrl: string;
  videoThumbnail: object;
  videoSection: string;
  videoLength: number;
  videoPlayer: string;
  links: [{ type: mongoose.Types.ObjectId; ref: "Link" }];
  suggestion: string;
  questions: [{ type: mongoose.Types.ObjectId; ref: "Comment" }];
}

const courseDataSchema = new Schema<ICourseData>({
  videoUrl: { type: String, required: true },
  videoThumbnail: { type: Object, required: true },
  title: { type: String, required: true },
  videoSection: { type: String, required: true },
  description: { type: String, required: true },
  videoLength: { type: Number, required: true },
  videoPlayer: { type: String, required: true },
  links: [{ type: mongoose.Types.ObjectId, ref: "Link" }],
  suggestion: { type: String },
  questions: [{ type: mongoose.Types.ObjectId, ref: "Comment" }],
});

const CourseDataModel: Model<ICourseData> = mongoose.model(
  "CourseData",
  courseDataSchema
);

export default CourseDataModel;
