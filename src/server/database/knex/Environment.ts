import { Knex } from 'knex'; 
import 'dotenv/config';

export const production: Knex.Config = {
  client: 'pg',
  connection:{ 
    //host : '10.0.1.159',
    host : 'localhost',
    port : 5432,
    database: process.env.DATABASE_NAME,
    user: 'postgres',
    password:'6467'
  } 
};




