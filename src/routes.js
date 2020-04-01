import { Router, response } from 'express';

import auth from './app/middlewares/auth';

const routes = new Router();

import controllers from './app/controllers/';
import validators from './app/validators/';

// routes.post('/sessoes', validators.Sessao, controllers.SessaoController.store);

routes.use(auth);

routes.get('/', (req, res) => res.json('ok'));

export default routes;
