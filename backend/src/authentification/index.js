const authRoutes = require('./routes/authRoutes');
const { setupAuthSessions } = require("./services/sessionService");
const express = require('express');
const router = express.Router();

module.exports = (app) => {
    setupAuthSessions(app);
    app.use('/', authRoutes);
}


