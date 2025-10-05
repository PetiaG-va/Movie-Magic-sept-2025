import { Router } from 'express';

import homeController from './controllers/homeController.js ';
import movieController from './controllers/movieController.js';

const routes = Router();

app.use(homeController);
app.use('/movies', movieController);

export default routes;

