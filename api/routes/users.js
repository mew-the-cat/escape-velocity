const express = require("express");

const userRoutes = express.Router();

const dbo = require("../db/conn");


userRoutes.route("/users/:userId").post(function (req, res) {
    let db_connect = dbo.getDb("game");
    let userData = {
        userId: req.params.userId,
        characters: req.body.characters,
        tiles: req.body.tiles,
        phase: req.body.phase,
        constructions: req.body.constructions,
        userPrompt: req.body.userPrompt,
    };
    db_connect.collection("users").insertOne(userData, function (err, res) {
        if (err) throw err;
    });
});

module.exports = userRoutes;