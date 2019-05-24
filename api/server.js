const express = require('express');
const gamesList = require('../gamesList/gamesModel');
const knex = require('knex');

const server = express();

server.use(express.json());

server.get('/', async (req, res) => {
    res.status(200).json({ message: "good to go"});
})

server.get('/games', async (req, res) => {
    const game = await gamesList.getAll()
    res.status(200).json(game)
})

server.post('/games', async (req, res) => {
    const games = await gamesList.getAll();
    res.status(201).json(games)
})
module.exports = server;