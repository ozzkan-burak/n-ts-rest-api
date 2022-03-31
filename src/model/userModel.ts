import mongoose from "mongoose";
import config from "config";
import bcrypt from "bcrypt";

// interfaces
import { IUserDocument } from '../interface/userDocument';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
},
{
  timestamps: true
});

UserSchema.pre("save", async function (next: any) {
  let user =  this as IUserDocument;

  if(!user.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(config.get("saltWorkFactor"));

  const hash = await bcrypt.hashSync(user.password, salt);

  user.password = hash;

  return next();

});


// Used for logiging in
 UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {

  const user = this as IUserDocument;

  return bcrypt.compare(candidatePassword, user.password).catch((err) => false)
}

const User = mongoose.model<IUserDocument>("User", UserSchema);

export default User