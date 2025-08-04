import { User } from "../db/user.js";
import { validateToken } from "../utils/jwt-token.js";

export const authorizeUser = (req, res, next) => {
    const payload = validateToken(req.cookies.accessToken);

    if (!payload) {
        return res.status(404).json({
            error: "Access token needed,"
        })
    }

    if (payload.role != 'ADMIN') {
        return res.status(403).json({
            error: "You don't have access do this action, Unauthorized"
        })
    }

    req.user = payload;
    next();

}


export const getUserIdFromToken = (req, res, next) => {
    const token = req.cookies?.accessToken;

    if (!token) {
        return res.status(401).json({ error: "Access token required" });
    }

    const payload = validateToken(token);

    if (!payload) {
        return res.status(401).json({ error: "Invalid or expired token" });
    }

    req.userId = payload.id;
    next();
};
