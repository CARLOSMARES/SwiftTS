// src/middlewares/index.ts
import { IncomingMessage, ServerResponse } from 'http';

export type Middleware = (
    req: IncomingMessage,
    res: ServerResponse,
    next: () => void
) => void;

export const applyMiddlewares = (
    req: IncomingMessage,
    res: ServerResponse,
    middlewares: Middleware[],
    handler: () => void
) => {
    const stack = [...middlewares];

    const next = () => {
        if (stack.length > 0) {
            const middleware = stack.shift();
            middleware && middleware(req, res, next);
        } else {
            handler();
        }
    };

    next();
};
