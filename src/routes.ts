import {Express, Request, Response} from 'express';
import { createUserController } from './controller/userController';

export default function (app: Express) {
    app.get('/healtcheck', (req: Request, res: Response) => {
        res.sendStatus(200);
    });


  // Register user
  // POST /api/user

  app.post("/api/users", validateRequest(createSchema), createUserController);

  // Login user
  // POST /api/session

  //Get the user's sessions
  // GET /api/session

  // Logout user
  // DELETE /api/session


}

