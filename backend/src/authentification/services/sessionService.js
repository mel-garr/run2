const session = require("express-session");
const RedisStore = require("connect-redis").default;
const redisclient = require("../../utils/redisClient");

function setupAuthSessions(app){
    app.use(session({
        store: new RedisStore({ client: redisclient}),
        secret: process.env.SESSION_SECRET || "dev-secret",
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 24 * 60 * 60 * 1000 }
    }));
}

module.exports = { setupAuthSessions }