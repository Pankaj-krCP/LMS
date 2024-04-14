import express from "express";
const authRoute = express.Router();
import { validateOtp } from "../../middlewares/validateOtp.middleware";
import {
  generateOtp,
  login,
  logout,
  refreshToken,
  signup,
  verifyUser,
} from "../../controllers/auth";

authRoute.post("/signup", signup);
authRoute.post("/generate-otp", generateOtp);
authRoute.put("/verify-user", validateOtp, verifyUser);
authRoute.post("/login", login);
authRoute.get("/refresh-token", refreshToken);
authRoute.get("/logout", logout);

export default authRoute;
