import { Router } from "express";

import { adminLogin, authRouteCheck, employeeLogin, refreshToken } from "../controllers/auth-controller.js";

const routes = Router();

routes.get('/check', authRouteCheck);

routes.post('/admins/login', adminLogin);

routes.post('/employees/login', employeeLogin);

routes.get('/refresh-token', refreshToken);

export default routes;