const request = require('supertest');
const app = require('../src/app');

describe('BFHL API', () => {
    it('should return operation code for GET request', async () => {
        const res = await request(app).get('/bfhl');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({ operation_code: 1 });
    });

    it('should process the POST request and return the expected response', async () => {
        const data = { data: ["A", "1", "b", "2", "c"] };
        const res = await request(app).post('/bfhl').send(data);
        expect(res.statusCode).toEqual(200);
        expect(res.body.is_success).toBe(true);
        expect(res.body.user_id).toBe('john_doe_17091999');
        expect(res.body.numbers).toEqual(["1", "2"]);
        expect(res.body.alphabets).toEqual(["A", "b", "c"]);
        expect(res.body.highest_lowercase_alphabet).toEqual(["c"]);
    });
});