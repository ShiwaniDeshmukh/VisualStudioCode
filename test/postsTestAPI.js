const { expect } = require('chai');
const apiHelper = require('../helpers/apiHelper');

describe('Posts', () => {
  let postId;

  before(async () => {
    console.log('Starting Posts test suite');
  });

  after(async () => {
    console.log('Finishing Posts test suite');
  });

  describe('POST', () => {
    it('should create a post', async () => {
      const data = {
        userId: 1,
        title: 'New Post',
        body: 'Lorem ipsum dolor sit amet.',
      };

      const res = await apiHelper.post('posts', data);

      // Assertion
      expect(res.status).to.equal(201);
      expect(res.body.title).to.equal(data.title);
      postId = res.body.id;
      console.log('Post created:', res.body);
    });
  });

  describe('GET', () => {
    it('should get a post by id', async () => {
      // Skip the test if postId is not set
      if (!postId) {
        this.skip();
      }

      const res = await apiHelper.get(`posts/${postId}`);
      console.log('Response:', res.body);
    });

    it('should use the response from one call in the request for another', async () => {
      // Skip the test if postId is not set
      if (!postId) {
        this.skip();
      }

      const res = await apiHelper.get(`posts/${postId}/comments`);

      // Assertion
      expect(res.status).to.equal(200);
      console.log('Response:', res.body);
    });
  });

  describe('PUT', () => {
    it('should update a post', async () => {
      // Skip the test if postId is not set
      if (!postId) {
        this.skip();
      }

      const data = {
        title: 'Updated Title',
        body: 'Updated body',
      };

      const res = await apiHelper.put(`posts/${postId}`, data);
      console.log('Response:', res.body);
    });
  });

  describe('DELETE', () => {
    it('should delete a post', async () => {
      // Skip the test if postId is not set
      if (!postId) {
        this.skip();
      }

      const res = await apiHelper.delete(`posts/${postId}`);

      // Assertion
      expect(res.status).to.equal(200);
      console.log('Post deleted');
    });
  });
});
