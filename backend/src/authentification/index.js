const express = require('express');
const router = express.Router();
const authRoutes = require('./routes/authRoutes');


router.use('/', authRoutes);

module.exports = router
