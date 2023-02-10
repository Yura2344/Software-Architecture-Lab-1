require('dotenv').config();
const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send({message: process.env.MESSAGE});
});

module.exports = app;