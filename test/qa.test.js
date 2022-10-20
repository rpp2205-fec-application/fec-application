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


// const server = setupServer(
//   rest.get('/qa/questions', (req, res, ctx) => {
//     return res(ctx.status(200));
//   })
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

describe('QA Component Test', () => {
  test('Should render Widget Title', () => {
    render(<QA product={mockData.product} />);
    expect(screen.getByText("QUESTIONS & ANSWERS")).toBeDefined();
  });
});

// describe('Questions List Test', () => {
//   test('Should render Questions List', () => {
//     render(<QAList product={mockData.product} questions={mockData.questions} />);
//     expect(getAllByText('Report', {exact: false})).toHaveLength(2);
//   });
//   test('after clicking "More Questions" button, it should render the remaining questions', async() => {
//     let list = render(<QAList questions={mockData.questions} product={mockData.product} />);
//     fireEvent.click(screen.getByText('MORE QUESTIONS'));
//     expect(list.getAllByRole('questions', {exact: false})).toHaveLength(4);
//   })
// });

