import { Router } from "express";
import { createNewEmployee, deleteEmployee, employeeRouteCheck, fetchAllEmployee, fetchEmployeeData, updateEmployeeData } from "../controllers/employee-controller.js";
import { authorizeUser } from "../middleware/authorize.js";

const routes = Router();

routes.get('/check', employeeRouteCheck);

routes.get('/', fetchAllEmployee);

routes.get('/:id', fetchEmployeeData);

routes.post('/', authorizeUser, createNewEmployee)

routes.patch('/:id', authorizeUser, updateEmployeeData);

routes.delete('/:id', authorizeUser, deleteEmployee);

export default routes;