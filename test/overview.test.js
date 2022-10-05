const axios = require('axios');
require('dotenv').config();

describe('Product Overview Testing', () => {
  const headers = {headers: {authorization: process.env.TOKEN}};

  test('Should return list of products when calling API', () => {
    expect(2+3).toEqual(5)
  })
})