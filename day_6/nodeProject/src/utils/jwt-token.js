import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const generateToken = (payload, res) => {
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '2d' });

    res.cookie('accessToken', token, {
        httpOnly: true,
        secureSite: true
    })
}

export const validateToken = (token) => {
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET_KEY)
        return payload;
    } catch (error) {
        return {
            error: "Invalid Token",
            reason: error
        }
    }
}