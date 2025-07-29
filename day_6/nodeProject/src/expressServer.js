import express from 'express';
import dotenv from 'dotenv';

import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { swaggerOptions } from './docs/swaggerOptions.js';

import userRoutes from './routes/user.routes.js';

import { logRoutes, timeStampLogger } from './middleware/logRoutes.js';

dotenv.config();

const server = express();

const swaggerSpec = swaggerJSDoc(swaggerOptions);
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const PORT = process.env.PORT || 3000;

server.use(express.json())

server.use(timeStampLogger)

/**
 * @swagger
 * /:
 *   get:
 *     summary: Test route to check server
 *     responses:
 *       200:
 *         description: A Sample message
 */

server.get('/', (req, res) => {
    res.json({
        message: "Its Root of API"
    })
})

server.get('/resume', (req, res) => {
    res.send("Downloading file").download('./src/assets/Naveen_Software_Developer_Resume.pdf');
})

server.get('/hello', (req, res) => {
    res.json({
        message: "Hey, Its a API response"
    })
})

server.use('/user', userRoutes);

server.use((req, res) => {
    res.send("Route not Found!").status(404).json({
        error: 'Not Found',
        message: `Cannot ${req.method} ${req.originalUrl}`
    });
});

server.listen(PORT, () => {
    console.log(
        `\nNode Server is running on http://localhost:${PORT}\t\tSwagger docs at http://localhost:7000/api-docs\n`
    )
})