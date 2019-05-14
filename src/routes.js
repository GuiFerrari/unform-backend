const express = require('express');

const routes = express.Router();

const BoxController = require('./controllers/BoxController');

routes.post('/boxes', BoxController.store);
routes.get('/boxes', BoxController.show);
routes.delete('/boxes/:id', BoxController.remove);

module.exports = routes;