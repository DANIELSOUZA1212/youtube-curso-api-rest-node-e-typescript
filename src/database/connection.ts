import knex from 'knex';
import 'dotenv/config';

export const db = knex({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 5432),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE_NAME,
  },
  pool: {
    min: 0,
    max: 10,
    acquireTimeoutMillis: 30000,
  },
});
