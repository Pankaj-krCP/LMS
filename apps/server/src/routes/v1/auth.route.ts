import express from "express";
const authRoute = express.Router();
import { generateOtp, signup } from "../../controllers/auth";

authRoute.post("/generate-otp", generateOtp);
authRoute.post("/signup", signup);

export default authRoute;
