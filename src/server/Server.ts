import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import routes from '../routes';

const app = express();

app.use(cors({
  origin: process.env.ENABLED_CORS?.split(';') || ['*'],
}));

app.use(express.json());

app.use(routes);

export { app };
