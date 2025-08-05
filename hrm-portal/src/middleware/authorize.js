import { validateAccessToken } from "../utils/jwt-token.js";

export const isAdmin = (req, res, next) => {
    const token = req.cookies?.accessToken;
    if (!token) {
        return res.status(400).json({
            error: "Access Token required(No Token Found)"
        })
    }
    const data = validateAccessToken(token);

    if (!data.verified) {
        return res.status(400).json({
            error: "Token Verification Failed"
        })
    }

    if (data.user.role.toUpperCase() != 'ADMIN') {
        return res.status(403).json({
            error: "You don't have access do this action, Unauthorized"
        })
    }

    req.user = data.user;
    next();

}

export const authorizeUser = (req, res, next) => {

    const token = req.cookies?.accessToken;
    if (!token) {
        return res.status(400).json({
            error: "Access Token required(No Token Found)"
        })
    }
    const data = validateAccessToken(token);



    if (!data.verified) {
        return res.status(400).json({
            error: "Access Token Verification Failed"
        })
    }

    if (['ADMIN', 'HR', 'MANAGER'].includes(data.user.role.toUpperCase())) {
        req.user = data.user;
        next();
        return;
    }

    return res.status(403).json({
        error: "You don't have access do this action, Unauthorized"
    })

}


export const getIdFromToken = (req, res, next) => {
    const token = req.cookies?.accessToken;

    if (!token) {
        return res.status(401).json({ error: "Access token required" });
    }

    const data = validateAccessToken(token);

    if (!data.verified) {
        return res.status(400).json({
            error: "Token Verification Failed"
        })
    }

    req.id = data.user.id;
    next();
};
