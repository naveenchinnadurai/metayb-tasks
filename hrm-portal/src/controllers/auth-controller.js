import { generateToken, validateRefreshToken } from "../utils/jwt-token.js";
import { Admin } from "../models/schema/admin.js";
import { Employee } from "../models/schema/employee.js";

export const authRouteCheck = (req, res) => {
    res.status(200).json({
        messaage: 'Inside Auth Route!!'
    })
}

export const adminLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(406).json({
            error: "Credentials are neccessary"
        })
        return;
    }

    try {
        let admin = await Admin.findOne({ where: { email } });

        if (!admin) {
            return res.status(404).json({
                error: "Admin not found"
            })
        }

        if (admin.password != password) {
            return res.status(403).json({
                error: "Invalid Credential (Password)!",
            })
        }


        generateToken(
            {
                id: admin.id,
                name: admin.name,
                role: admin.role
            },
            res)

        res.status(200).json({
            message: "Login Successful",
            user: admin
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Error Logging in",
            reason: err
        })
    }

}

export const employeeLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(406).json({
            error: "Credentials are neccessary"
        })
    }

    try {
        let employee = await Employee.findOne({ where: { email } });

        if (!employee) {
            return res.status(404).json({
                error: "Employee not found"
            })
        }

        if (employee.password != password) {
            return res.status(403).json({
                error: "Invalid Credential (Password)!",
                password: employee.password
            })
        }


        generateToken(
            {
                id: employee.id,
                name: employee.name,
                role: employee.role
            },
            res)

        res.status(200).json({
            message: "Login Successful",
            user: employee
        })
    } catch (err) {
        res.status(500).json({
            error: "Error Logging in",
            reason: err
        })
    }

}

export async function refreshToken(req, res) {
    try {
        const token = req.cookies?.refreshToken;

        if (!token) {
            return res.status(401).json({ message: 'Refresh token missing' });
        }

        const decoded = validateRefreshToken(token);

        generateToken({
            id: decoded.id,
            role: decoded.role,
            email: decoded.email,
        }, res);

        res.json({
            message: "Token verified and returned Successful"
        });
    } catch (err) {
        return res.status(403).json({
            message: 'Invalid or expired refresh token',
            reason: err
        });
    }
}