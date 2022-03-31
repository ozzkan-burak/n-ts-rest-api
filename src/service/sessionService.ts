import { DocumentDefinition } from "mongoose";
import User from "../model/userModel";
import { IUserDocument } from "../interface/userDocument";
import { omit } from "lodash";

export async function createUser(input: DocumentDefinition<IUserDocument>) {
  try {
    return await User.create(input);
  } catch (error: any) {
    throw new Error(error);
  };
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