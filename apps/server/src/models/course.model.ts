import mongoose, { Document, Model, Schema } from "mongoose";

interface ICourse extends Document {
  title: string;
  description: string;
  price: number;
  estimatedPrice?: number;
  thumbnail: {
    public_id: string;
    url: string;
  };
  tags: string;
  level: string;
  demoUrl: string;
  benefits: { title: string }[];
  prerequisites: string[];
  reviews: [{ type: mongoose.Types.ObjectId; ref: "Review" }];
  courseData: [{ type: mongoose.Types.ObjectId; ref: "CourseData" }];
  ratings?: number;
  purchased?: number;
}

const courseSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  estimatedPrice: {
    type: Number,
  },
  thumbnail: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  tags: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  demoUrl: {
    type: String,
    required: true,
  },
  benefits: [
    {
      title: String,
    },
  ],
  prerequisites: [String],
  reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
  courseData: [{ type: mongoose.Types.ObjectId, ref: "CourseData" }],
  ratings: {
    type: Number,
    default: 0,
  },
  purchased: {
    type: Number,
    default: 0,
  },
});

const CourseModel: Model<ICourse> = mongoose.model("Course", courseSchema);

export default CourseModel;
