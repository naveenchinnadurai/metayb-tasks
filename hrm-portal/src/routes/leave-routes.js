import { Router } from "express";
import { createLeaveRequest, fetchAllLeave, leaveRouteCheck, LeavesByEmployeeId, updateLeaveRequest } from "../controllers/leave-controller.js";
import { authorizeUser, getIdFromToken } from "../middleware/authorize.js";


const routes = Router();

routes.all('/check', leaveRouteCheck);

routes.get('/', fetchAllLeave);

routes.get('/:id', LeavesByEmployeeId);

routes.post('/', getIdFromToken, createLeaveRequest);

routes.patch('/:id', authorizeUser, updateLeaveRequest)

export default routes;