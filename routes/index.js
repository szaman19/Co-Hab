const routes = require('express').Router();

const find = require('./find');
routes.get('/', function(req, res) {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/find',find);

module.exports = routes;
