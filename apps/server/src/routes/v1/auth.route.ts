import express from "express";
const authRoute = express.Router();
import { validateOtp } from "../../middlewares/validateOtp.middleware";
import { generateOtp, signup, verifyUser } from "../../controllers/auth";

authRoute.post("/signup", signup);
authRoute.post("/generate-otp", generateOtp);
authRoute.put("/verify-user", validateOtp, verifyUser);

export default authRoute;
