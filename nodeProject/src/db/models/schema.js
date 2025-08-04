import db from '../connect.js'
import { DataTypes } from 'sequelize';

export const User = db.define(
    'users',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING,
        role: DataTypes.ENUM('ADMIN', 'JUNIOR DEVELOPER', 'TESTER', 'UI/UX DESIGNER'),
        YOB: DataTypes.STRING,
        email: DataTypes.STRING,
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }
)