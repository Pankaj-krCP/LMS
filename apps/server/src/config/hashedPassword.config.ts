import bcrypt from "bcryptjs";

export const hashedPassword = async (password: string) => {
  try {
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw new Error(error as any);
  }
};
