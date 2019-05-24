const express = require('express');
const gamesList = require('../gamesList/gamesModel');


const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({ message: "good to go"});
})

server.get('/game', async (req, res) => {
    const game = await gamesList.getAll()
    res.status(200).json(game)
})

module.exports = server;