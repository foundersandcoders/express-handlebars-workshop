const express = require('express');
const path = require('path');
const router = express.Router();

// import home route controller
const home = require('./home');
const fruits = require('./fruits');
const fruit = require('./fruit');
const error = require('./error');

// add home route
router.get('/', home.get);
router.get('/fruits', fruits.get);
router.get('/fruits/:fruit', fruit.get);
router.use(error.client);
router.use(error.server);

module.exports = router;
