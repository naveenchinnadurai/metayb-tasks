// main.js or server.js
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { swaggerOptions } from './docs/index.js';

import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';

import { logRoutes, timeStampLogger } from './middleware/logRoutes.js';

dotenv.config();

const server = express();
const PORT = process.env.PORT || 7000;

// Swagger setup
const swaggerSpec = swaggerJSDoc(swaggerOptions);
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// View engine
server.set('view engine', 'ejs');
server.set('views', 'src/views');

// Middleware
server.use(express.json());
server.use(cookieParser());
server.use(timeStampLogger);

// Root routes
server.get('/', (req, res) => {
    res.json({
        message: 'Its Root of API, redirect to docs to see API Endpoints',
        'docs-link': `http://localhost:${PORT}/api-docs/`,
    });
});

server.get('/resume', (req, res) => {
    res.send("Downloading file").download('./src/assets/Naveen_Software_Developer_Resume.pdf');
});

server.get('/check', (req, res) => {
    res.json({
        message: 'Hey, Its a API response',
    });
});

// Main API Routes
server.use('/api/v1/auth', authRoutes);
server.use('/api/v1/users', userRoutes);

// 404 handler
server.use((req, res) => {
    res.status(404).json({
        error: 'Route not Found!',
        message: `Cannot Find ${req.method} ${req.originalUrl}`,
    });
});

// Start server
server.listen(PORT, () => {
    console.log(`\nServer running at http://localhost:${PORT} \t\t Swagger docs at http://localhost:${PORT}/api-docs\n`);
});
