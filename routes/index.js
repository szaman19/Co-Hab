const routes = require('express').Router();

const find = require('./find'); //tester. Deprecate soon
const api = require('./api');
routes.get('/', function(req, res) {
  res.status(200).json({ message: 'Connected!' });
});

routes.use('/find',find);
routes.use('/api',api);

module.exports = routes;
