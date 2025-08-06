import seq from "sequelize";

import { Employee } from "../models/schema/employee.js";

const or = seq.Op.or;

export const employeeRouteCheck = (req, res) => {
    res.status(200).json({
        message: "Inside Employee Route"
    })
}

export const fetchAllEmployee = async (req, res) => {
    try {
        const employees = await Employee.findAll();

        if (!employees) {
            return res.status(204).json({
                message: "No Employees"
            })
        }

        res.status(200).json({
            message: "Fetched all Employee Info",
            employees
        })
    } catch (err) {
        res.status(500).json({
            error: "Error when fetching employees data",
            reason: err
        })
    }
}

export const fetchEmployeeData = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(406).json({
            error: "Id is missing"
        })
    }

    try {
        const employee = await Employee.findByPk(id);

        if (!employee) {
            return res.status(404).json({
                error: "Employee not Found!"
            })
        }

        res.status(200).json({
            message: "Employee data fetched successfull",
            employee
        })
    } catch (err) {
        res.status(500).json({
            error: "Error Fetching Employee Info"
        })
    }
}

export const createNewEmployee = async (req, res) => {

    const currUser = req.user;
    const { name, role, email, mobile, DOB, experience } = req.body;

    if (!name || !role || !email || !mobile || !DOB) {
        return res.status(417).json({
            error: "Incomplete necessary fields"
        })
    }

    try {
        let newEmployee = await Employee.findOne(
            {
                where: {
                    [or]: [
                        { email },
                        { mobile }
                    ]
                }
            })

        if (newEmployee) {
            return res.status(400).json({
                error: "Employee already exist with email or mobile"
            })
        }

        newEmployee = await Employee.create({
            name,
            role: role.toUpperCase(),
            email,
            mobile,
            DOB,
            experience,
            manager_id: currUser.id,
            password: mobile
        })

        res.status(201).json({
            message: "Employee Created Successfull",
            user: newEmployee
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Error Creating new employee",
            reason: err
        })
    }
}

export const updateEmployeeData = async (req, res) => {

    const { id } = req.params;
    const data = req.body;

    console.log(id)

    if (!id) {
        return res.status(400).json({
            error: "No id found or bad request"
        })
    }

    if (!data) {
        return res.status(406).json({
            error: "Data not found"
        })
    }

    try {
        let employee = await Employee.findByPk(id);
        console.log(employee)

        if (!employee) {
            return res.status(404).json({
                error: "Employee Not Found",
            })
        }

        Object.entries(data).forEach(([key, value]) => {
            if (key != 'id' && key != 'role' && key != 'manager_id') {
                employee[key] = value;
            } else {
                return res.status(403).json({
                    error: "Id, Manager Id and role field are not updatable"
                })
            }
        })

        employee.save();

        res.status(200).json({
            message: "Data updated Successfully"
        })
    } catch (err) {
        res.status(500).json({
            error: "Error during updating employee data",
            reason: err
        })
    }

}

export const deleteEmployee = async (req, res) => {
    const { id: employeeToDelete } = req.params;
    const currUser = req.user;

    if (!currUser) {
        return res.status(400).json({
            error: "Invalid User! you are unrecognised"
        })
    }

    try {
        const employee = await Employee.findByPk(employeeToDelete);

        if (!employee) {
            return res.status(404).json({
                error: "Employee not found"
            })
        }
        employee.destroy();

        res.status(200).json({
            message: "Employee Deleted Successfull"
        })
    } catch (err) {
        return res.status(403).json({
            error: "Error Deleting EmployeeF",
            reason: err
        })
    }
}