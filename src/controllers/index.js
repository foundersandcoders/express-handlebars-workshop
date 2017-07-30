const express = require('express');
const path = require('path');
const router = express.Router();

const fruits = require('./fruits');
const fruit = require('./fruit');
const error = require('./error');

router.get('/fruits', fruits.get);
router.get('/fruits/:fruit', fruit.get);
router.use(error.client);
router.use(error.server);

module.exports = router;
