import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const emailValidator: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface IOtp {
  email: string;
  otp: string;
  createdAt: Date;
  isOtpMatched: (password: string) => Promise<boolean>;
}

const otpSchema = new mongoose.Schema<IOtp>({
  email: {
    type: String,
    required: [true, "Please provide userId-db"],
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
  this.otp = await bcrypt.hash(this.otp, salt);
  next();
});

otpSchema.methods.isOtpMatched = async function (enteredOtp: string) {
  return await bcrypt.compare(enteredOtp, this.otp);
};

const Otp = mongoose.model<IOtp>("Otp", otpSchema);

export default Otp;
