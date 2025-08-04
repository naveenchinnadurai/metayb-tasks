import { Router } from "express";
// import { User } from "../db/user.js";
import { authorizeUser, getUserIdFromToken } from "../middleware/authorizeUser.js";
import { User } from "../db/models/schema.js";
import { where } from "sequelize";
import { createNewUser, getEveryUser, getUserById, getUserBySearchQueries, getUserProfile, userRouteCheck, patchUserData, deleteUser } from "../controllers/users.controller.js";

const routes = Router();

routes.get('/check', userRouteCheck);

routes.get('/', getEveryUser);

routes.get('/id/:id', getUserById);

routes.get('/search', getUserBySearchQueries);

routes.post('/',/*authorizeUser, */ createNewUser);

routes.patch('/', getUserIdFromToken, patchUserData);

routes.delete('/:id', authorizeUser, deleteUser);

routes.get('/profile', getUserIdFromToken, getUserProfile);

export default routes;