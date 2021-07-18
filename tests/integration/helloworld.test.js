const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../src/app');
const config = require('../../src/config/config');

describe('GET /', () => {
	beforeEach(() => {
        config.env = 'production'; //ensure all the api works for production environment
    });

    test('path should result in success', async (done) => {
        await request(app).get('/').send().expect(httpStatus.OK);
        done();
    });

    test('path should return html by default', async (done) => {
        const res = await request(app).get('/').send().expect('Content-Type', 'text/html; charset=utf-8');
        expect(res.text).toBe('<p>Hello, World</p>');
        done();
    });

    test('path should return json when Accept header is set to application/json', async (done) => {
        const res = await request(app).get('/').set({'Accept': 'application/json'}).send();
        expect(res.body.message).toBe('Hello, World');
        done();
    });

});