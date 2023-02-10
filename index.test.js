require('dotenv').config();
const app = require("./index");
const supertest = require("supertest");

const request = supertest(app);

it('gets Hello World', async () => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.body.message).toBe(process.env.MESSAGE);
});