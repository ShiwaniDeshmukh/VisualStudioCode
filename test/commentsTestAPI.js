const { expect } = require('chai');
const apiHelper = require('../helpers/apiHelper');

describe('Comments', () => {
  before((done) => {
    console.log('Starting comments test suite...');
    done();
  });

  after((done) => {
    console.log('Finished comments test suite');
    done();
  });

  it('GET /comments', async () => {
    const res = await apiHelper.get('comments');

    // Assertion
    expect(res.status).to.equal(200);
    expect(res.body).to.not.be.empty;
    console.log('Response:', res.body);
  });

  it('POST /comments', async () => {
    const data = {
      postId: '1',
      name: 'that labor from and how many labors',
      email: 'test@example.com',
      body: 'for those who praise lord',
    };

    const res = await apiHelper.post('comments', data);

    // Assertion
    expect(res.status).to.equal(201);
    expect(res.body.email).to.equal(data.email);
    console.log('Response:', res.body);
  });

  it('should assert the response from a request', async () => {
    const res = await apiHelper.get('comments/1');

    // Assertion
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('postId');
    expect(res.body).to.have.property('name');
    expect(res.body).to.have.property('email');
    expect(res.body).to.have.property('body');
    console.log('Response:', res.body);
  });

  it('should use the response from one call in the request for another', async () => {
    const postRes = await apiHelper.get('posts/1');
    const postId = postRes.body.id;

    const commentsRes = await apiHelper.get(`posts/${postId}/comments`);

    // Assertion
    expect(commentsRes.status).to.equal(200);
    console.log('Response:', commentsRes.body);
  });
});
