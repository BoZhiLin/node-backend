// const { expect } = require('chai');
const supertest = require('supertest');
const apiServer = supertest('http://127.0.0.1:3000/api');

describe('test', () => {
    it('Get all posts', done => {
        apiServer
            .get('/posts')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                console.log('success');
                done();
            })
    })
})
