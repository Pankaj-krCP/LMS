import express from "express";
const authRoute = express.Router();
import { generateOtp, signup, verifyOtp } from "../../controllers/auth";

authRoute.post("/signup", signup);
authRoute.post("/generate-otp", generateOtp);
authRoute.put("/verify-otp", verifyOtp);

export default authRoute;
