import { Router } from "express";
import { User } from "../db/user.js";
import { authorizeUser } from "../middleware/authorizeUser.js";

const routes = Router();

routes.get('/check', (req, res) => {
    res.status(200).json({
        message: "Reached User Route!"
    })

    return;
})

routes.get('/', (req, res) => {
    res.status(200).json({
        message: "Fetched All Users Data",
        users: User
    })

    return;
})

routes.get('/id/:id', (req, res) => {
    const searchId = req.params.id;

    const user = User.find((e) => e.id == searchId);

    if (!user) {
        res.status(404).json({
            message: "User Not Found"
        })
        return;
    }

    res.status(200).json({
        message: "User fetched successfully!!",
        user
    })
})

routes.get('/search', (req, res) => {
    const { name, email } = req.query;

    const user = User.filter((e) => {

        if (!name) {
            const matchesEmail = email ? e.email.toLowerCase() === email.toLowerCase() : false;
            return matchesEmail;
        }

        if (!email) {
            const matchesName = name ? e.name.toLowerCase() === name.toLowerCase() : false;
            return matchesName;
        }

        return e.email.toLowerCase() === email.toLowerCase() && e.name.toLowerCase() === name.toLowerCase();

    });

    return res.status(200).json({
        message: "Data fetched successfully, search",
        user: user
    });
});


routes.post('/', authorizeUser, (req, res) => {
    const { name, role, YOB, email } = req.body;

    if (!name || !role || !YOB || !email) {
        res.status(406).json({
            error: "All fields are neccessary!"
        })
        return;
    }

    let user = User.find((e) => e.email == email);

    if (user) {
        res.status(400).json({
            error: `User with this email id ${email} already exist!`
        })
        return;
    }

    try {
        user = {
            id: User[User.length - 1].id + 1,
            name,
            role,
            YOB,
            email
        };

        User.push(user);

        res.status(201).json({
            message: "New User Added Sucessfully!",
            newUser: user
        })
    } catch (error) {
        res.status(400).json({
            error: "Error during adding new User",
            reason: error
        })
    }

})

export default routes;