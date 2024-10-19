// src/router/router.ts
import { IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
import { applyMiddlewares, Middleware } from '../middlewares/index';
import { routes } from './routes';

const middlewares: Middleware[] = [
    //Añade middlewares aqui
];

export const router = (req: IncomingMessage, res: ServerResponse) => {
    const parsedUrl = parse(req.url || '', true);
    const path = parsedUrl.pathname || '/';
    const method = req.method || 'GET';

    const routeKey = `${method} ${path}`;
    const handler = routes[routeKey];

    if (handler) {
        applyMiddlewares(req, res, middlewares, () => handler(req, res));
    } else {
        res.statusCode = 404;
        res.end('Ruta no encontrada');
    }
};