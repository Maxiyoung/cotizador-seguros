import express from 'express';
import cors from 'cors';
import { cotizarRouter } from './routes/cotizar.routes';
import { errorHandler } from './middlewares/errorHandler';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(cotizarRouter);
app.use(errorHandler);