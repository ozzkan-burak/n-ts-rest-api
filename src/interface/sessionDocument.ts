import mongoose from "mongoose";
import { IUserDocument } from "../interface/userDocument";

export interface ISessionDocument extends mongoose.Document {
  user:IUserDocument["_id"];
  valid: boolean;
  userAgent: string;
  createdAt: Date;
  updateAt: Date;
};