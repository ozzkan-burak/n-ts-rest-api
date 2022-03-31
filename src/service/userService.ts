import { DocumentDefinition } from "mongoose";
import User from "../model/userModel";

// interface 
import { IUserDocument } from "../interface/userDocument";

export async function createUser(input: DocumentDefinition<IUserDocument>) {
  
  try {
    return await User.create(input);
  }catch(err) {
    throw new Error(err as any);
  }
}

function findUser() {}

export async function validatePassword({
  email,
  password
} :{
  email: IUserDocument['email'];
  password: string;
}) {
  const user = await User.findOne({ email });

  if (!user) {
    return false;
  }

  return omit(user.toJSON(), " password");
}