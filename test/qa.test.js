const axios = require('axios');
require('dotenv').config();

describe('Product QA Testing', () => {
  const headers = {headers: {authorization: process.env.TOKEN}};

  test('Should Add Numbers like a Boss', () => {
    expect(72+31).toEqual(103);
  })
})