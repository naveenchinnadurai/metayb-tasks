import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import { syncDB } from './models/index.js';

import authRoutes from './routes/auth-routes.js';
import adminRoutes from './routes/admin-routes.js';
import employeeRoutes from './routes/employee-routes.js';
import leaveRoutes from './routes/leave-routes.js';

import { timeStampLogger } from './middleware/logger.js';

dotenv.config();

const server = express();
const PORT = process.env.PORT || 4000;

server.use(express.json());
server.use(cookieParser());
server.use(timeStampLogger)

server.get('/', (req, res) => {
    res.status(200).json({
        message: "Backend Server Started!"
    })
})

server.use('/api/v1/auth', authRoutes);
server.use('/api/v1/admins', adminRoutes);
server.use('/api/v1/employees', employeeRoutes);
server.use('/api/v1/leaves', leaveRoutes);

server.use((req, res) => {
    res.status(404).json({
        error: "Route not Found"
    })
})

server.listen(PORT, () => {
    syncDB();
    console.log(`\nServer is running on http://localhost:${PORT}\n`);
})