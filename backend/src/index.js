const express = require("express");
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());

app.use('/api/auth', require('./authentification'));
app.use('/api/noti', require('./notification'));

app.get("/", (req, res) => {
    res.send("Server is running!");
});
console.log("Auth router loaded:", require('./authentification'));

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
});
