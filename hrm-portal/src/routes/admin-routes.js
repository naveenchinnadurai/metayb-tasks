import { Router } from "express";
import { getIdFromToken, isAdmin } from "../middleware/authorize.js";
import { adminRouteCheck, fetchAdminData, updateAdminData, deleteAdmin, createNewAdmin } from "../controllers/admin-controller.js";

const routes = Router();

routes.get('/check', adminRouteCheck);

routes.get('/:id', fetchAdminData);

routes.post('/', createNewAdmin)

routes.patch('/', getIdFromToken, updateAdminData);

routes.delete('/:id', isAdmin, deleteAdmin);

export default routes;