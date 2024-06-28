const request = require('supertest');
const app = require('../src/app');
const path = require('path');
const fs = require('fs');

describe('GET /', () => {
    it('should respond with index.html', async () => {
        const res = await request(app)
            .get('/')
            .expect('Content-Type', /html/)
            .expect(200);

        const indexHtmlPath = path.join(__dirname, '../src/views/index.html');
        const indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf8');

        expect(res.text).toBe(indexHtmlContent);
    });
});
