import { Router } from "express";
import { User } from "../db/user.js";
import { generateToken } from "../utils/jwt-token.js";

const routes = Router();

routes.get('/', (req, res) => {
    res.status(200).json({
        messaage: 'Inside Auth Route!!'
    })
})

routes.post('/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(406).json({
            error: "Credentials are neccessary"
        })
        return;
    }

    let user = User.find((e) => e.email == email);

    if (!user) {
        res.send(404).json({
            error: "User not found"
        })
        return;
    }

    if (user.password != password) {
        res.status(403).json({
            error: "Invalid Credential (Password)!"
        })

        return;
    }


    generateToken({ id: user.id, name: user.name, role: user.role }, res)

    console.log(res.cookie);

    res.send(200).json({
        message: "Login Successful",
        user: user
    })

})

export default routes;