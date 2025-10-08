const express = require("express");
const app = express();
require('dotenv').config();



app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.listen(PORT, () => {
    console.log(`server is listening on ${PORT}`);
});
