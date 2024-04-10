import { Request, Response } from "express";
import catchAsyncError from "../middlewares/catchAsyncError.middleware";

const signup = catchAsyncError(async (req: Request, res: Response) => {
  //signup logic
});

export { signup };
