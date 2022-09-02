import { config as dotEnv } from 'dotenv';

dotEnv();

const host = process.env.DB_HOST;
const port = parseInt(process.env.DB_PORT|| 5432);
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD; 
const database = process.env.DB_DATABASE;
const dialect = 'postgres';

module.exports = {
    host,
    port,
    username,
    password,
    database,
    dialect,
    define: {
        timestamps: true,
        underscored: true
    }
}