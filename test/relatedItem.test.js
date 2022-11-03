import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import mockData from './mock/mockData.js';
import RelatedItems from '../client/src/components/relatedItems/RelatedItems.jsx';
import Outfit from '../client/src/components/relatedItems/Outfit.jsx';
import RelatedItemCard from '../client/src/components/relatedItems/RelatedItemCard.jsx';
import OutfitCard from '../client/src/components/relatedItems/OutfitCard.jsx';
import mock from './mock/mock.js';

const server =setupServer(
  rest.get('/products', (req,res,ctx) => {
    return res(ctx.status(200));
  })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Parent component Outfit Tests', () => {
  test('should render Outfit title', () => {
    render(<Outfit product={mockData.product} outfit={[mockData.product]} />)
    expect(screen.getByText('Your Outfit')).toBeDefined();
  });
})

describe('component RelatedItemCard Tests', () => {
  test('should render a card', () => {
    render(<RelatedItemCard product={mockData.product} mainProduct={mockData.product} />)
    expect(screen.getByText('Camo Onesie')).toBeDefined();
  });
})

describe('Outfit Card', () => {
  test('it should render a card', () => {
    render(<OutfitCard product={mockData.product} />)
    expect(screen.getByText('Camo Onesie')).toBeDefined();
  });
})

describe('component RelatedItemCard Tests', () => {
  test('should render a card', () => {
    render(<OutfitCard product={mockData.product}/>)
    expect(screen.getByText('Camo Onesie')).toBeDefined();
  });
})