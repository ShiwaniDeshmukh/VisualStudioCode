const { expect } = require('chai');
const apiHelper = require('../helpers/apiHelper');

describe('Users', () => {
    before(() => {
        console.log('Starting Users API tests...');
    });

    after(() => {
        console.log('All Users API tests completed.');
    });

    it('GET /users', async () => {
        const res = await apiHelper.get('users');

        // Assertion
        expect(res.status).to.equal(200);
        expect(res.body).to.not.be.empty;

        console.log('Response:', res.body);
    });

    it('GET /users/:id', async () => {
        const res = await apiHelper.get('users/1');

        // Assertion
        expect(res.status).to.equal(200);
        expect(res.body).to.have.property('id');
        expect(res.body).to.have.property('name');
        expect(res.body).to.have.property('email');
        expect(res.body).to.have.property('address');
        console.log('Response:', res.body);
    });

    it('should assert the response from a request', async () => {
        const queryParams = {
            username: 'Bret',
            email: 'test@example.com',
        };

        const res = await apiHelper.get('users', queryParams);

        // Assertion
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.length.above(0);

        console.log('Response:', res.body);
    });
});
