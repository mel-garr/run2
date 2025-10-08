const express = require('express');
const router = express.Router();
const authRoutes = require('./routes/authRoutes');


Router.use('/', authRoutes);

module.exports = router
