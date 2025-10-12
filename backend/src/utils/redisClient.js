const { createClient } = require('redis');

const redisclient = createClient({
    url: "redis://redis:6379",
});

redisclient.on('connect', () => console.log("Redis connected"));
redisclient.on('error', (err) => console.log("Redis error", err));

(async () => {
    try {
        await redisclient.connect();
    } catch (err) {
        console.error ("Failed to connect to Redis:", err);
    }
})();

module.exports = redisclient;