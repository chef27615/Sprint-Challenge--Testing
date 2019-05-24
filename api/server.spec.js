const request = require('supertest');
const server = require('./server');
const db = require('../data/dbConfig');
const Games = require('../gamesList/gamesModel');

describe('server', () => {
    it('should testing in the right environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })

    describe('endpoints', () => {
        beforeEach(async () => {
            await db('games').truncate();
        })


        describe('GET /', () => {
            it('should return 200', async () => {
                const res = await request(server).get('/');
                expect(res.status).toBe(200)
            })
        })

        describe('GET /games', () => {
            it('should return 200', async () => {
                const res = await request(server).get('/games');
                expect(res.status).toBe(200)
            })

            it('should return an empty array of games', async () => {
                const games = await db('games');
                expect(games).toHaveLength(0)
            })
            
            it('should return array of games', async () => {
                await Games.insert({title: 'heroKey', genre: 'RPG', releaseYear: '1994'});
                const games = await db('games');
                expect(games).toHaveLength(1)
            })
        })

        describe('POST /game', () => {
            beforeEach(async () => {
                await db('games').truncate();
            })

            it('should insert games', async () => {
                await Games.insert({ title: 'bandit luke', genre: 'Action', releaseYear: '2010'});
                const games = await db('games');
                expect(games).toHaveLength(1)
            })

            it('should create game object', async () => {
                await Games.insert({ title: 'luke story', genre: 'Action', releaseYear: '2011'});
                const res = await request(server).get('/games');
                const data = res.body;
                expect(res.status).toBe(200)
                expect(data).toHaveLength(1)
                expect(data[0].title).toBe('luke story')
            })
        })
    })
})