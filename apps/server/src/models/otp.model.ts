import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const emailValidator: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface IOtp {
  name: string;
  email: string;
  password: string;
  otp: string;
  createdAt: Date;
  isOtpMatched: (password: string) => Promise<boolean>;
}

const otpSchema = new mongoose.Schema<IOtp>({
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
    minlength: [6, "Password must be at least 6 characters"],
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

otpSchema.index({ createdAt: 1 }, { expireAfterSeconds: 300 });

otpSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSaltSync(10);
  this.password = await bcrypt.hash(this.password, salt);
  this.otp = await bcrypt.hash(this.otp, salt);
  next();
});

otpSchema.methods.isOtpMatched = async function (enteredOtp: string) {
  return await bcrypt.compare(enteredOtp, this.otp);
};

const Otp = mongoose.model<IOtp>("Otp", otpSchema);

export default Otp;
