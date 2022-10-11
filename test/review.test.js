import React from 'react';
import '@testing-library/jest-dom';
import {render, fireEvent, screen} from '@testing-library/react';
import Reviews from '../client/src/components/reviews/Reviews';
import mockData from './mock/mockData.js';
describe('Rating and Reviews Tests', () => {
  test('Check if the component rendered', () => {
    render(<Reviews product={mockData.product} reviewsMeta={mockData.reviewsMeta} reviews={mockData.reviews}/>)
    expect(screen.getByText(/^RATINGS/)).toHaveTextContent(
      'RATINGS & REVIEWS',
    )
  });
})


