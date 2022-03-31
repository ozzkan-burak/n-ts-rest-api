import config from "config";
import { Omit } from "lodash";
import { LeanDocument } from "mongoose";
import Session from "../model/sessionModel";
import { ISessionDocument } from "../interface/sessionDocument";
import { IUserDocument } from "../interface/userDocument";
import {sign, decode} from "../utils/jwtUtils"

export async function createSession(userId: string, userAgent: string) {
  const session = await Session.create({
    userId,
    userAgent
  });

  return session.toJSON();
}

export function createAccessToken({
  user,
  session
}: {
  user: 
    | Omit<IUserDocument, "password">
    | LeanDocument<Omit<IUserDocument, "password">>;
  session: 
    | Omit<ISessionDocument, "password">
    | LeanDocument<Omit<ISessionDocument, "password">>;

}) {
  const accessToken = sign (
    {...user, session: session._id},
    {expiresIn: config.get("accessTokenTtl")}
  )
}