const chai = require('chai');

const expect = chai.expect;
const url = `http://localhost:4005/`;
const request = require('supertest')(url);

describe('test', () => {
    it('should return a string', () => {
        expect('ci with travis').to.equal('ci with travis');
    });
});
