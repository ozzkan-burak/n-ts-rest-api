import { Request,Response } from 'express';
import {omit} from 'lodash';
import {createUser} from '../service/userService';
import log from '../logger';

export async function createUserController(req: Request, res: Response) {
    try {
        const user = await createUser(req.body);
        return res.status(201).json(omit(user.toJSON(), ['password']));
        // return res.send(omit.toJSON(), "password");
    } catch (err: any) {
        log.error(err);
        res.status(409).send(err.message)
    }
}

export async function createUserSessionHandler(req: Request, res: Response) {
    try {
        return res.sendStatus(200);
    } catch (err: any) {
        log.error(err);
        res.status(409).send(err.message)
    }
}