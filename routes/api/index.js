const routes = require('express').Router();

const find = require('./find');
const group = require('./group');
const user = require('./user');
const auth = require('./auth');

routes.get('/', function(req, res) {
  res.status(200).json({ message: 'API index' });
});

routes.use('/find',find);
routes.use('/group',group);
routes.use('/user',user);
routes.use('/auth',auth);

module.exports = routes;
