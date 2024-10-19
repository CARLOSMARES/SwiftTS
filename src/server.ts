// src/server.ts
import http from 'http';
import { router } from './router/router';

const server = http.createServer((req, res) => {
    router(req, res);
});

server.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
