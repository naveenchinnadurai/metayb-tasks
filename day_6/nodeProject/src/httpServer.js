import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    const products = [
        { id: 1, name: 'Lenova' },
        { id: 2, name: 'Acer' },
    ];
    const { url, method } = req;

    if (url === '/' && method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'This is the API root!' }));
    } else if (url === '/products' && method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify(products));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Route not found' }));
    }
});

server.listen(port, 'localhost', () => {
    console.log(`Server running at http://localhost:${port}/`);
});
