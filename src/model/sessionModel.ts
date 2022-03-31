import mongoose from "mongoose";
import { ISessionDocument } from "../interface/sessionDocument";

const SessionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  valid: {
    type: Boolean,
    required: true,
  },
  userAgent: {
    type: String,
  },
},
{timestamps: true}
);

const Session = mongoose.model<ISessionDocument>("Session", SessionSchema);

export default Session;

