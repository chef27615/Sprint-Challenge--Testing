const request = require('supertest');
const server = require('./server');

describe('server', () => {
    it('should testing in the right environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })

    describe('endpoints', () => {
        describe('GET /', () => {
            it('should return 200', async () => {
                const res = await request(server).get('/');
                expect(res.status).toBe(200)
            })
        })

        describe('/game', () => {
            it('should return 200', async () => {
                const res = await request(server).get('/game');
                expect(res.status).toBe(200)
            })
        })
    })
})