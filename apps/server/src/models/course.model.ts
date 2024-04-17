import mongoose, { Document, Model, Schema } from "mongoose";

export interface ICourse extends Document {
  title: string;
  description: string;
  price: number;
  estimatedPrice?: number;
  thumbnail: { type: mongoose.Types.ObjectId; ref: "Thumbnail" };
  tags: [string];
  level: string;
  demoUrl: string;
  benefits: [string];
  prerequisites: [string];
  reviews: [{ type: mongoose.Types.ObjectId; ref: "Review" }];
  sections: [
    {
      _id?: string;
      title: string;
      courseData: [{ type: mongoose.Types.ObjectId; ref: "CourseData" }];
    },
  ];
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
  thumbnail: { type: mongoose.Types.ObjectId, ref: "Thumbnail" },
  tags: [
    {
      type: String,
      required: true,
    },
  ],
  level: {
    type: String,
    required: true,
  },
  demoUrl: {
    type: String,
    required: true,
  },
  benefits: [String],
  prerequisites: [String],
  reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
  sections: [
    {
      title: {
        type: String,
        required: true,
      },
      courseData: [{ type: mongoose.Types.ObjectId, ref: "CourseData" }],
    },
  ],
  ratings: {
    type: Number,
    default: 0,
  },
  purchased: {
    type: Number,
    default: 0,
  },
});

const courseModel: Model<ICourse> = mongoose.model("Course", courseSchema);

export default courseModel;
