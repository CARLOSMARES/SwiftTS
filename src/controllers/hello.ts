// src/controllers/userController.ts
import { IncomingMessage, ServerResponse } from 'http';

export const hello = (req: IncomingMessage, res: ServerResponse) => {
    const users = [{ id: 1, name: 'Juan' }, { id: 2, name: 'María' }];
    res.setHeader('Content-Type', 'application/json');
    res.end("Hellow World!");
};
