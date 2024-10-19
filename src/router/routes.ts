// src/router/routes.ts
import { IncomingMessage, ServerResponse } from 'http';
import { hello } from '../controllers/hello';

type RouteHandler = (req: IncomingMessage, res: ServerResponse) => void;

export const routes: { [key: string]: RouteHandler } = {
    'GET /': hello,
};
