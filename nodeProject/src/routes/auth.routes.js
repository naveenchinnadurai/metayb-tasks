import { Router } from "express";

import { authRouteCheck, login } from "../controllers/auth.controllers.js";

const routes = Router();

routes.get('/', authRouteCheck)

routes.post('/login', login)

export default routes;