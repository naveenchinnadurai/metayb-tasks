
import { Employee } from "../models/schema/employee.js";
import { Leave } from "../models/schema/leave.js";


export const leaveRouteCheck = (req, res) => {
    res.status(200).json({
        message: "Inside Leave Route"
    })
}

export const fetchAllLeave = async (req, res) => {

    try {
        const leaves = await Leave.findAll();

        if (leaves.length == 0) {
            return res.status(204).json({
                message: "No leave Data"
            })
        }

        res.status(200).json({
            message: "Leave Data Fetched Successfully",
            leaves
        })
    } catch (err) {
        res.status(500).json({
            error: "Error Fetching Leave Data",
            reason: err
        })
    }
}

export const LeavesByEmployeeId = async (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(406).json({
            error: "Employee Id is Missing"
        })
    }

    try {
        const leaves = await Leave.findAll({ where: { employee_id: id } });

        if (leaves) {
            return res.status(204).json({
                message: "No leave Data Found"
            })
        }

        res.status(200).json({
            message: "Leave data fetched successfull",
            leaves
        })
    } catch (err) {
        res.status(500).json({
            error: "Error Fetching Leave Info"
        })
    }
}


export async function createLeaveRequest(req, res) {
    const employeeId = req.id;

    if (!employeeId) {
        return res.status(401).json({
            error: 'Unauthorized: Employee not logged in'
        });
    }

    const { leave_type, start_date, end_date, reason } = req.body;

    if (!leave_type || !start_date || !end_date || !reason) {
        return res.status(400).json({
            error: 'Incomplete necessary fields'
        });
    }

    try {
        const newLeave = await Leave.create({
            employee_id: employeeId,
            leave_type,
            start_date,
            end_date,
            reason: reason,
            manager_id: await Employee.findOne({ where: { id: employeeId } }).then((data) => data.manager_id),
        });

        res.status(201).json({
            message: 'Leave request created successfully',
            leave: newLeave
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            error: 'Error Creating Leave Request',
            reason: err
        });
    }
}


export const updateLeaveRequest = async (req, res) => {

    const manager = req.user;
    const { id: requestId } = req.params;
    const { status, response } = req.body

    if (!status) {
        return res.status(400).json({
            error: "Status of the request is missing"
        })
    }

    try {
        const request = await Leave.findByPk(requestId);

        if (!request) {
            return res.status(404).json({
                error: "Leave request not Found"
            })
        }
        if (request.manager_id != manager.id) {
            return res.status(401).json({
                error: "You cannot update this leave request"
            })
        }

        request.status = status;
        request.response = response ? response : "No Response";

        request.save()

        res.status(200).json({
            message: "Request Updated Successfully"
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: "Error Updating Leave Request",
            reason: err
        })
    }

}