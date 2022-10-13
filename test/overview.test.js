import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';
import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import mockData from './mock/mockData.js';
import {calculateRating} from '../client/src/helpers.js'

import Overview from '../client/src/components/overview/Overview.jsx';
import ProductInfo from '../client/src/components/overview/ProductInfo.jsx';
import StylesSection from '../client/src/components/overview/StylesSection.jsx';
import SizeSelector from '../client/src/components/overview/SizeSelector.jsx';
import QuantitySelector from '../client/src/components/overview/QuantitySelector.jsx';
import Description from '../client/src/components/overview/Description.jsx';


const server = setupServer(
  // capture "GET /products" requests
  rest.get('/products', (req, res, ctx) => {
    return res(ctx.status(200));
  })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Product Info Test', () => {
  test('Should render product name', () => {
    render(<ProductInfo name={mockData.product.name} category={mockData.product.category} originalPrice={mockData.product.default_price} salePrice={0} />)
    expect(screen.getByText("Camo Onesie")).toBeDefined();
  });

  test('Should render product description', () => {
    render(<Description slogan={mockData.product.slogan} description={mockData.product.description} />)
    expect(screen.getByText("Blend in to your crowd")).toBeDefined();
  });
})

describe('Style List Test', () => {
  test('Should render list of styles', () => {
    let styleList = render(<StylesSection styles={mockData.styles} selectedStyle={mockData.styles[0]} />)
    expect(styleList.getAllByRole('style', {exact: false})).toHaveLength(3);
  });
})

describe('Size List Test', () => {
  test('Should render a selector of all sizes of a specific style', () => {
    let sizeList = render(<SizeSelector selectedStyle={mockData.styles[0]} selectedSizeId={"2580526"}/>)
    expect(sizeList.getAllByRole('size', {exact: false})).toHaveLength(6);
  });
})

describe('Quantity List Test', () => {
  test('Should render a selector of quantity corresponding to the size', () => {
    let quantityList = render(<QuantitySelector quantityOfSelectedSize={mockData.styles[0].skus["2580526"].quantity} selectedQuantity={1} />)
    expect(quantityList.getAllByRole('qty', {exact: false})).toHaveLength(8);
  });
})