import { NextFunction } from "express";

const catchAsyncError =
  (passedFunction: any) =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(passedFunction(req, res, next)).catch(next);
  };

export default catchAsyncError;
