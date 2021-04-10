const express = require("express");
const fs = require("fs");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/notes.html"));
})
