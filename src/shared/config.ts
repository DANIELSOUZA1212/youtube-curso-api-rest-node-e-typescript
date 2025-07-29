import 'dotenv/config';

export const config = {
  port: process.env.PORT || 3333,
  databaseUrl: process.env.DATABASE_URL || {
    host: '127.0.0.1',
    user: 'postgres',
    password: '6467',
    database: 'meubanco',
  }
};
