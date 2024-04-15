import express from "express";
const authRoute = express.Router();
import { validateOtp } from "../../middlewares/validateOtp.middleware";
import { isLogin } from "../../middlewares/auth.middleware";
import {
  generateOtp,
  login,
  logout,
  refreshToken,
  resetPassword,
  signup,
  socialAuth,
  updatePassword,
  verifyUser,
} from "../../controllers/auth";

authRoute.post("/signup", signup);
authRoute.post("/generate-otp", generateOtp);
authRoute.put("/verify-user", validateOtp, verifyUser);
authRoute.post("/login", login);
authRoute.get("/refresh-token", refreshToken);
authRoute.get("/all-logout", logout);
authRoute.put("/reset-password", validateOtp, resetPassword);
authRoute.put("/update-password", isLogin, updatePassword);
authRoute.post("/social-auth", socialAuth);

export default authRoute;
