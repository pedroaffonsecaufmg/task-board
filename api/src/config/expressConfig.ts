import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { authRoutes } from '../domains/auth/auth.routes.js';
import { clientsRoutes } from '../domains/clients/clients.routes.js';
import { serviceOrdersRoutes } from '../domains/service-orders/service-orders.routes.js';
import { errorHandler } from '../middlewares/errorHandler.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));
app.use(cookieParser());

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/clients', clientsRoutes);
app.use('/service-orders', serviceOrdersRoutes);

app.use(errorHandler);

export { app };