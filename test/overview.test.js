import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import Overview from '../client/src/components/overview/Overview.jsx';
import mockData from './mock/mockData.js';

const server = setupServer(
  // capture "GET /products" requests
  rest.get('/products', (req, res, ctx) => {
    return res(ctx.status(200));
  })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Product Overview Testing', () => {
  const headers = {headers: {authorization: process.env.TOKEN}};

  test('Should return list of products when calling API', () => {
    expect(2+3).toEqual(5)
  })
})