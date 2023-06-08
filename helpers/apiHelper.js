const supertest = require('supertest');
const apiConfig = require('../config/apiConfig');

const request = supertest(apiConfig.baseUrl);

const apiHelper = {
    post: (endpoint, data) => {
        return request.post(endpoint).send(data);
    },

    get: (endpoint) => {
        return request.get(endpoint);
    },

    put: (endpoint, data) => {
        return request.put(endpoint).send(data);
    },

    delete: (endpoint) => {
        return request.delete(endpoint);
    },
};

module.exports = apiHelper;
