import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db_name = process.env.DB_NAME;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;

if (!db_name || !db_user || !db_password) {
    throw new Error("Incomplete .env file!");
}

const db = new Sequelize(db_name, db_user, db_password, {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    logging: false
});


(async () => {
    try {
        await db.authenticate();
        console.log('Database connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
        process.exit(1)
    }
})();


export default db;