import seq from "sequelize";
import { Admin } from "../models/schema/admin.js";

const or = seq.Op.or;

export const adminRouteCheck = (req, res) => {
    res.status(200).json({
        message: "Inside Admin Route"
    })
}

export const fetchAdminData = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(406).json({
            error: "Id is missing or Invalid Token"
        })
    }

    try {
        const admin = await Admin.findByPk(id);

        if (!admin) {
            return res.status(404).json({
                error: "Admin not Found!"
            })
        }

        res.status(200).json({
            message: "Admin data fetched successfull",
            admin
        })
    } catch (err) {
        res.status(500).json({
            error: "Error Fetching Admin Info"
        })
    }
}

export const createNewAdmin = async (req, res) => {

    const { name, role, email, mobile, DOB, password } = req.body;

    if (!name || !role || !email || !mobile || !DOB || !password) {
        return res.status(417).json({
            error: "Incomplete necessary fields"
        })
    }

    try {

        let newAdmin = await Admin.findOne(
            {
                where: {
                    [or]: [
                        { email },
                        { mobile }
                    ]
                }
            })


        if (newAdmin) {
            return res.status(400).json({
                error: "Admin already exist with email or mobile",
            })
        }

        newAdmin = await Admin.create({
            name,
            role: role.toUpperCase(),
            email,
            mobile,
            DOB,
            password
        })

        res.status(201).json({
            message: "Admin Created Successfull",
            user: newAdmin
        })
    } catch (err) {
        res.status(500).json({
            error: "Error Creating new admin",
            reason: err
        })
    }
}

export const updateAdminData = async (req, res) => {

    const { id } = req;
    const data = req.body;

    if (!id) {
        return res.status(400).json({
            error: "No id found or bad request"
        })
    }

    if (!data) {
        return res.status(404).json({
            error: "Data not found"
        })
    }

    try {
        let admin = await Admin.findByPk(id)

        Object.entries(data).forEach(([key, value]) => {
            if (key != 'id' && key != 'role') {
                admin[key] = value;
            } else {
                return res.status(403).json({
                    error: "Id and role field are not updatables"
                })
            }
        })

        admin.save();

        res.status(200).json({
            message: "Data updated Successfully"
        })
    } catch (err) {
        res.status(500).json({
            error: "Error during updating admin data",
            reason: err
        })
    }

}

export const deleteAdmin = async (req, res) => {
    const { id: adminToDelete } = req.params;
    const currUser = req.user;

    if (!currUser) {
        return res.status(400).json({
            error: "Invalid User! you are unrecognised"
        })
    }

    try {
        const admin = await Admin.findByPk(adminToDelete);
        if (!admin) {
            return res.status(404).json({
                error: "Admin not found"
            })
        }
        admin.destroy();
        res.status(200).json({
            message: "Admin Deleted Successfully"
        })
    } catch (err) {
        return res.status(403).json({
            error: "Error Deleting AdminF",
            reason: err
        })
    }
}