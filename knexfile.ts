// import dotenv module
import dotenv from 'dotenv';
import path from 'path';
import getDirName from './src/utils/path.js';

const __dirname = getDirName(import.meta.url)

dotenv.config({
    path: path.resolve(__dirname, '../.env')
})

// dotenv.config()

export default {
    development: {
        client: 'pg',
        connection: {
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD
        },
        ssl: {
            rejectUnauthorized: false,
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: 'db/migrations',
        },
        seeds: {
            directory: 'db/seeds',
        },
    },
};
