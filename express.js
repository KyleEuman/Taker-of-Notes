const express = require("express");
const fs = require("fs");
const path = require("path");
const Database = require("./db/db.json")

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

app.route("/api/notes")

.get(function (req, res) {
    res.json(database);
})

.post(function (req, res) {
    let jsonFilePath = path.join(__dirname, "/db/db.json");
    let newNote = req.body;
})

fs.writeFile(jsonFilePath, JSON.stringify(database), function (err) {

    if (err) {
        return console.log(err);
    }
    console.log("Your note was saved!");
});

res.json(newNote);


app.delete("/api/notes/:id", function (req, res) {
    let jsonFilePath = path.join(__dirname, "/db/db.json");
})