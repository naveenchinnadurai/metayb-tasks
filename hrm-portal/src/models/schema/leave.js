import { DataTypes } from 'sequelize';
import db from '../../config/db.js';

export const Leave = db.define(
    'leave',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        employee_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'employees',
                key: 'id'
            }
        },
        leave_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        reason: {
            type: DataTypes.STRING,
            allowNull: false
        },
        manager_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'admins',
                key: 'id'
            }
        },
        status: {
            type: DataTypes.ENUM('Pending', 'Rejected', 'Approved'),
            defaultValue: 'Pending'
        },
        response: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "Not Yet Responded"
        },
    },
    {
        timestamps: true
    }
)