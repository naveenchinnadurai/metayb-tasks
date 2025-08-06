import { Admin } from "./schema/admin.js";
import { Employee } from "./schema/employee.js";
import { Leave } from "./schema/leave.js";

import db from "../config/db.js";

export const syncDB = async () => {
    try {
        await db.sync({ alter: true });
        console.log('Database synced');

    } catch (error) {
        console.error('Error syncing database:', error);
    }
}