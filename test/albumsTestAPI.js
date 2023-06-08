const { expect } = require('chai');
const apiHelper = require('../helpers/apiHelper');

describe('Albums', () => {
    before(() => {
        console.log('Starting albums test suite...');
    });

    after(() => {
        console.log('Albums test suite finished.');
    });

    it('POST', (done) => {
        const albumData = {
            userId: 1,
            title: 'New Album',
        };

        apiHelper
            .post('albums', albumData)
            .end((err, res) => {
                // Assertion
                expect(res.status).to.equal(201);
                expect(res.body).to.deep.include(albumData);
                console.log('Created Album:', res.body);
                done();
            });
    });

    it('GET /albums with query params', async () => {
        const url = 'albums?userId=1&id=5';

        const res = await apiHelper.get(url);

        // Assertion
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');

        if (res.body) {
            res.body.forEach((element) => {
                expect(element.userId).to.equal(1);
                expect(element.id).to.equal(5);
            });
        }

        console.log(res.body);
    });

    it('should set headers for a request', async () => {
        const res = await apiHelper.get('albums');

        // Assertion
        expect(res.status).to.equal(200);

        console.log('Response:', res.body);
    });

    it('should set the body for a request', async () => {
        const albumData = {
            title: 'New Album',
        };

        const res = await apiHelper.post('albums', albumData);

        // Assertion
        expect(res.status).to.equal(201);
        expect(res.body.title).to.equal(albumData.title);
        console.log('Response:', res.body);
    });
});
