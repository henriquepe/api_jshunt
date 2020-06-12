const express = require('express');
const ProductController = require('../controllers/ProductController.js');

const routes = express.Router();

routes.get('/products', ProductController.index);

routes.get('/products/:id', ProductController.show);

routes.post('/products', ProductController.store);

routes.put('/products/:id', ProductController.update);

routes.delete('/products/:id', ProductController.destroy);

routes.delete('/products', ProductController.destroyAll);

module.exports = routes;