import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const generateToken = (payload, res) => {
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '2d' });

    res.cookie('accessToken', accessToken, {
        httpOnly: true,
        secureSite: true
    })

    const refreshToken = jwt.sign(payload, process.env.REFRESH_SECRET_KEY, { expiresIn: '5d' });

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secureSite: true
    })
}

export const validateAccessToken = (token) => {
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY)
        return {
            verified: true,
            user: payload
        };
    } catch (error) {
        return {
            verified: false,
            error: "Invalid Access Token",
            reason: error
        }
    }
}

export const validateRefreshToken = (token) => {
    try {
        const payload = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
        return {
            verified: true,
            user: payload
        };
    } catch (error) {
        return {
            verified: false,
            error: "Invalid Refresh Token",
            reason: error
        }
    }
}