import type { Knex } from 'knex';
import 'dotenv/config';

export const production: Knex.Config = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    port: 5432,
    database: process.env.DATABASE_NAME,
    user: 'postgres',
    password: '6467',
  },
  pool: { min: 0, max: 5 },
};
