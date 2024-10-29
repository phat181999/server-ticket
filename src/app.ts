import express, { Application } from 'express';
import dotenv from 'dotenv';
import { rootRouter } from './routes';
import cors from 'cors';

dotenv.config();
const app: Application = express();
app.use(express.json());
app.use(cors());
app.use('/api/v1', rootRouter);

export default app;
