import {Request, Response} from 'express';
import {validatePassword} from "../service/userService";
import {createAccessToken, createSession} from "../service/sessionService";
import {sign, decode} from "../utils/jwtUtils"
import config from "config";


export async function createUserSessionHandler(req: Request, res: Response) {
 const user = await validatePassword(req.body)

  if (!user) {
    return res.status(400).send({
      message: "Invalid email or password"
    });
  }

  const session = await createSession(user.id, req.get("user-agent") || "");

  const accessToken = createAccessToken({
    user,
    session
  })

  const refreshToken = sign(session, {
    expiresIn: config.get("refreshTokenTtl"),
  })

  return accessToken

}