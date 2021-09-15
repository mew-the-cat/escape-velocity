const express = require("express");
const { StatusCodes } = require('http-status-codes');

const userRoutes = express.Router();

const dbo = require("../db/conn");


userRoutes.route("/users/:userId").post(function (req, res) {
    let db_connect = dbo.getDb("escapeVelocity");
    const userId = req.params.userId;
    let userData = {
        userId: userId,
        characters: req.body.characters,
        tiles: req.body.tiles,
        phase: req.body.phase,
        constructions: req.body.constructions,
        userPrompt: req.body.userPrompt,
    };

    db_connect.collection("users").insertOne(userData, function (err) {
        if (err) {
            return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR)
        } else {
            return res.status(StatusCodes.OK).send("Created user with id " + userId)
        }
    });
});

module.exports = userRoutes;