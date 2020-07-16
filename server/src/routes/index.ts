import { Router } from 'express';
import appointementsRouter from './appointements.routes';

const routes = Router();

routes.use('/appointments', appointementsRouter);

export default routes;
