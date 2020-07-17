import { Router } from 'express';

import appointementsRouter from './appointements.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/appointments', appointementsRouter);
routes.use('/users', usersRouter);


export default routes;
