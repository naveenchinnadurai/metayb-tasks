// import { User } from "../db/user.js";
import { User } from "../db/models/schema.js";

export const userRouteCheck = (req, res) => {
    res.status(200).json({
        message: "Reached User Route!"
    })
}

export const getEveryUser = async (req, res) => {

    try {
        const user = await User.findAll();
        res.status(200).json({
            message: "Fetched All Users Data",
            users: user
        })
    } catch (err) {
        res.status(500).json({
            error: "Error Fetching user data",
            reason: err
        })
    }
}


export const getUserById = async (req, res) => {
    const searchId = req.params.id;

    try {
        const user = await User.findOne({ where: { id: searchId } })

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            })
            return;
        }

        res.status(200).json({
            message: "User fetched successfully!!",
            user
        })
    } catch (err) {
        res.status(500).json({
            error: `Error getting user by id ${searchId}`,
            reason: err
        })
    }
}

export const getUserBySearchQueries = (req, res) => {
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
}

export const createNewUser = async (req, res) => {
    const { name, role, YOB, email, password } = req.body;

    if (!name || !role || !YOB || !email || !password) {
        return res.status(406).json({
            error: "All fields are neccessary!"
        })
    }

    let user = await User.findOne({ where: { email } });

    if (user) {
        return res.status(400).json({
            error: `User with this email id ${email} already exist!`
        })
    }

    try {
        user = await User.create({ name, role, YOB, email, password });

        res.status(201).json({
            message: "New User Added Sucessfully!",
            newUser: user
        })
    } catch (err) {
        res.status(400).json({
            error: "Error during adding new User",
            reason: err
        })
    }

}


export const getUserProfile = async (req, res) => {

    const id = req.userId;

    if (!id) {
        return res.status(404).json({
            error: "Id not found"
        })
    }

    try {
        const user = await User.findOne({ where: { id } });

        if (!user) {
            return res.status(404).json({
                error: "User not found, Invalid access token"
            })
        }

        const userData = user.dataValues;

        res.render('profile', userData)
    } catch (err) {
        res.status(505).json({
            error: "Error Rendering Profile",
            reason: err
        })
    }
}

export const patchUserData = async (req, res) => {

    const data = req.body;

    const id = req.userId;

    if (!id) {
        return res.status(400).json({
            error: "No userId"
        })
    }

    if (!data) {
        return res.status(400).json({
            error: "Data incomplete"
        })
    }

    try {
        let user = await User.findByPk(id);

        if (!user) {
            res.status(404).json({
                error: "User not Found"
            })
        }

        Object.entries(data).forEach(([key, value]) => {
            user[key] = value;
        })

        await user.save();

        res.status(200).json({
            message: "Data Updated Successfully!",
            user
        })
    } catch (err) {
        res.status(500).json({
            error: "Error Updating Data",
            reason: err
        })
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).json({
            error: "No userId"
        })
    }

    try {
        await User.destroy({ where: { id } })

        res.status(200).json({
            message: "User Deleted successfully"
        })
    } catch (err) {

        res.status(500).json({
            error: "Error during deleting User",
            reason: err
        })
    }
}