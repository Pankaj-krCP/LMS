import mongoose, { ObjectId } from "mongoose";
import bcrypt from "bcryptjs";

const emailValidator: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface IUser {
  _id?: ObjectId;
  name: string;
  email: string;
  password: string;
  avatar: {
    public_id: string;
    url: string;
  };
  role: string;
  isVerified: boolean;
  courses: [{ type: mongoose.Types.ObjectId; ref: "Course" }];
  isPasswordMatched: (password: string) => Promise<boolean>;
  refreshToken: string;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    email: {
      type: String,
      required: [true, "Please enter mail"],
      validate: {
        validator: function (value: string) {
          return emailValidator.test(value);
        },
        message: "please enter valid mail",
      },
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Enter Password"],
      minlength: [6, "Password must be atleaset 6 character"],
    },
    avatar: {
      public_id: String,
      url: String,
    },
    role: {
      type: String,
      default: "user",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    courses: {
      type: [{ type: mongoose.Types.ObjectId, ref: "Course" }],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.isPasswordMatched = async function (
  enteredPassword: string
) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const UserModel = mongoose.model<IUser>("User", userSchema);

export default UserModel;
