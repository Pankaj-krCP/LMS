import { generateOtp } from "./generateOtp.controller";
import { signup } from "./signup.controller";
import { verifyUser } from "./verifyUser.controller";
import { login } from "./login.controller";
import { refreshToken } from "./refreshToken.controller";
import { logout } from "./logout.controller";
import { resetPassword } from "./resetPassword.controller";
import { updatePassword } from "./updatePassword.controller";
import { socialAuth } from "./socialAuth.controller";
import { updateUser } from "../user/updateUser.controller";

export {
  generateOtp,
  signup,
  verifyUser,
  login,
  refreshToken,
  logout,
  resetPassword,
  updatePassword,
  socialAuth,
  updateUser,
};
