import { generateToken } from "../utils/jwt-token.js";
// import { User } from "../db/user.js";
import { User } from "../db/models/schema.js";

export const authRouteCheck = (req, res) => {
    res.status(200).json({
        messaage: 'Inside Auth Route!!'
    })
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(406).json({
            error: "Credentials are neccessary"
        })
        return;
    }

    try {
        let user = await User.findOne({ where: { email } });

        if (!user) {
            res.send(404).json({
                error: "User not found"
            })
            return;
        }

        if (user.password != password) {
            res.status(403).json({
                error: "Invalid Credential (Password)!",
                password: user.password
            })

            return;
        }


        generateToken(
            {
                id: user.id,
                name: user.name,
                role: user.role
            },
            res)

        res.send(200).json({
            message: "Login Successful",
            user: user
        })
    } catch (err) {
        res.status(500).json({
            error: "Error Logging in",
            reason: error
        })
    }

}