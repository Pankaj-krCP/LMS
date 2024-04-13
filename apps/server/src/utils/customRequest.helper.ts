import { Request } from "express";
import { IUser } from "../models/user.modal";
import { Document } from "mongoose";

export interface CustomRequest extends Request {
  user?: Document<IUser>;
}
