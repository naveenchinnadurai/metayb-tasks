import { DataTypes } from 'sequelize';
import db from '../../config/db.js';

export const Employee = db.define(
    'employee',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        role: {
            type: DataTypes.ENUM('DEVELOPER', 'DESIGNER', 'ANALYST', 'TEAM LEAD'),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        mobile: {
            type: DataTypes.STRING,
            allowNull: true
        },
        DOB: {
            type: DataTypes.DATE,
            allowNull: false
        },
        experience: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '0'
        },
        manager_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'admins',
                key: 'id'
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }
)