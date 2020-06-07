import PointsControler from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

import express from 'express';
const routes = express.Router();

const pointsController = new PointsControler();
const itemsController = new ItemsController();


//listagem de itens
routes.get('/items', itemsController.index);

//cadatro ponto de coleta
routes.post('/points', pointsController.create);
routes.get('/points/', pointsController.index);
routes.get('/points/:id', pointsController.show);


export default routes;