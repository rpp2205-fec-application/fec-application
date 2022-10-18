import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import mockData from './mock/mockData.js';

import QA from '../client/src/components/qa/QA.jsx';
import QuestionBar from '../client/src/components/qa/QA.jsx';
import QAList from '../client/src/components/qa/QA.jsx';
import Add from '../client/src/components/qa/QA.jsx';


const server = setupServer(
  rest.get('/products', (req, res, ctx) => {
    return res(ctx.status(200));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('QA Component Test', () => {
  test('Should render product name', () => {
    render(<QA product={mockData.product} />)
    expect(screen.getByText("QUESTIONS & ANSWERS")).toBeDefined();
  });

//   test('Question Bar Test', () => {
//     render(<Description slogan={mockData.product.slogan} description={mockData.product.description} />)
//     expect(screen.getByText("Blend in to your crowd")).toBeDefined();
//   });
});

// describe('QA List Test', () => {
//   test('Should render list of styles', () => {
//     let styleList = render(<StylesSection styles={mockData.styles} selectedStyle={mockData.styles[0]} />)
//     expect(styleList.getAllByRole('style', {exact: false})).toHaveLength(3);
//   });
// })

// describe('Add Test (final section)', () => {
//   test('Should render a selector of all sizes of a specific style', () => {
//     let sizeList = render(<SizeSelector selectedStyle={mockData.styles[0]} selectedSizeId={"2580526"}/>)
//     expect(sizeList.getAllByRole('size', {exact: false})).toHaveLength(6);
//   });
// })