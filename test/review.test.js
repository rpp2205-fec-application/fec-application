import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import Reviews from '../client/src/components/reviews/Reviews';
import ReviewsList from '../client/src/components/reviews/ReviewsList';
import ReviewEntry from '../client/src/components/reviews/ReviewEntry';
import mockData from './mock/mockData.js';

const server =setupServer(
  rest.get('/reviews', (req,res,ctx) => {
    return res(ctx.status(200));
  })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Parent component Reviews Tests', () => {
  test('should render Rating&Reviews title', () => {
    render(<Reviews product={mockData.product} reviewsMeta={mockData.reviewsMeta} reviews={mockData.reviews}/>)
    expect(screen.getByText('RATINGS & REVIEWS')).toBeDefined();
  });
})

describe('ReviewsList component Tests', () => {
  test('should render multiple reviews', async() => {
    const { getAllByText} = render(<ReviewsList reviews={mockData.reviews} id={mockData.product.id} />);
    expect(getAllByText('Report', {exact: false})).toHaveLength(2);
  })
  test('after click More Review button should render more reviews', async() => {
    let list = render(<ReviewsList reviews={mockData.reviews} id={mockData.product.id} />);
    fireEvent.click(screen.getByText('MORE REVIEWS'));
    expect(list.getAllByRole('reviews', {exact: false})).toHaveLength(3);
  })
})

describe('ReviewsEntry component Tests', () => {
  test('should render one reviews', async() => {
    let review = render(<ReviewEntry review={mockData.reviews[0]}/>);
    expect(review.getAllByText('Not great!')).toBeDefined();
  })
})