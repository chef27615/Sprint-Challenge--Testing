const db = require('../data/dbConfig')
const Games = require('./gamesModel');

describe('game model', () => {
    describe('insert', () => {
        beforeEach(async () => {
            await db('games').truncate();
        })

        it('should insert provide game to db', async () => {
            await Games.insert({ title: 'eater', genre: 'none', releaseYear: '2050'})
            const game = await db('games');
            expect(game).toHaveLength(1)
        })

        it('should insert given game into the db', async () => {
            await Games.insert({title: 'drinker', genre: 'none', releaseYear: '2050'})
            const games = await db('games');
            expect(games[0].title).toBe('drinker');
        })
    })

    describe('getAll', () => {
        beforeEach(async () => {
            await db('games').truncate();
        })

        it('should get all the games', async () => {
            await Games.insert({title: 'drinker', genre: 'none', releaseYear: '2050'});
            await Games.insert({ title: 'eater', genre: 'none', releaseYear: '2051'});
            // await Games.getAll();
            const games = await Games.getAll();
            expect(games).toHaveLength(2)
            expect(games[0].releaseYear).toBe('2050');
        })
    })
})