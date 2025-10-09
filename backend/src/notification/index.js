const express = require('express');
const router = express.Router();
const notiRoutes = require('./routes/notiRoutes');

router.use('/', notiRoutes);

module.exports = notiRoutes
