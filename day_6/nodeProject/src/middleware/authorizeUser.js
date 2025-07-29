import { validateToken } from "../utils/jwt-token.js";

export const authorizeUser = (req, res, next) => {
    const payload = validateToken(req.cookies.accessToken);

    if (!payload) {
        res.status(404).json({
            error: "Access token needed,"
        })
    }

    if (payload.role != 'Admin') {
        res.status(403).json({
            error: "You don't have access do this action, Unauthorized"
        })
    }

    next();

}