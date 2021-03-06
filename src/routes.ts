import {Express, Request, Response} from 'express';
import { createUserController, createUserSessionSchema } from './controller/userController';
import validateRequest from './middleware/validateRequest';
import { createUserSchema } from './schema/user.schema';

export default function (app: Express) {
    app.get('/healtcheck', (req: Request, res: Response) => {
        res.sendStatus(200);
    });


  // Register user
  // POST /api/user

  app.post("/api/users", validateRequest(createUserSchema), createUserController);

  // Login user
  app.post(
    "/api/session",
    validateRequest(createUserSessionSchema),
    createUserSessionHandler
  )

  //Get the user's sessions
  // GET /api/session

  // Logout user
  // DELETE /api/session


}

