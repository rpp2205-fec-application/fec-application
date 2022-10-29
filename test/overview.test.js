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
import DefaultView from '../client/src/components/overview/DefaultView.jsx';
import ExpandedView from '../client/src/components/overview/ExpandedView.jsx';
import ImageGallery from '../client/src/components/overview/ImageGallery.jsx';
import MaxZoomView from '../client/src/components/overview/MaxZoomView.jsx';
import NormalZoom from '../client/src/components/overview/NormalZoom.jsx';
import RatingInfo from '../client/src/components/overview/RatingInfo.jsx';
import SimpleThumbnails from '../client/src/components/overview/SimpleThumbnails.jsx';
import Thumbnails from '../client/src/components/overview/Thumbnails.jsx';


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
    expect(styleList.getAllByRole('style', {exact: false})).toHaveLength(1);
  });
})

describe('Size List Test', () => {
  test('Should render a selector of all sizes of a specific style', () => {
    let sizeList = render(<SizeSelector selectedStyle={mockData.styles[0]} selectedSizeId={"2580526"}/>)
    expect(sizeList.getAllByRole('size', {exact: false})).toHaveLength(3);
  });
})

describe('Quantity List Test', () => {
  test('Should render a selector of quantity corresponding to the size', () => {
    let quantityList = render(<QuantitySelector quantityOfSelectedSize={mockData.styles[0].skus["2580526"].quantity} selectedQuantity={1} />)
    expect(quantityList.getAllByRole('qty', {exact: false})).toHaveLength(8);
  });
})

describe('Product Description Test', () => {
  test('Description should display slogan', () => {
    render(<Description slogan={mockData.product.slogan} description={mockData.product.description} />)
    expect(screen.getByText('Blend in to your crowd')).toBeDefined();
  })
})

describe('Rating Info Test', () => {
  test('Rating component should include links', () => {
    render(<RatingInfo rating={mockData.rating} />)
    expect(screen.getByText('Read all reviews')).toBeDefined();
  })
})

describe('Image Gallery Test', () => {
  test('Should render image gallery', () => {
    const imageGallery = render(<ImageGallery selectedStyle={mockData.styles[0]} styles={mockData.styles} interaction={() => {}} />)
      expect(imageGallery.getAllByRole('thumbnail', {exact: false})).toBeDefined();
      expect(imageGallery.getAllByRole('big-picture', {exact: false})).toBeDefined();
  })
  test('Thumbnails should display at most 7 images at a time', () => {
    const thumbnails = [];
    const photos = [];
    mockData.styles[0].photos.forEach((photo, index) => {
      var thumbnail = [index, photo.thumbnail_url];
      thumbnails.push(thumbnail);
    })
    const thumbnailsSection = render(<Thumbnails thumbnails={thumbnails} selectedStyle={mockData.styles[0]} selectedPhotoIndex={0} />)
    expect(thumbnailsSection.getAllByRole('thumbnail', {exact: false})).toHaveLength(3);
  })
  test('Big picture first display the first photo in the set', () => {
    const photos = [];
    mockData.styles[0].photos.forEach((photo, index) => {
      var thumbnail = [index, photo.thumbnail_url];
      photos.push(photo.url)
    })
    const bigPicture = render(<DefaultView photos={photos} selectedStyle={mockData.styles[0]} selectedPhotoIndex={0} />)
    expect(bigPicture.getByTestId(photos[0], {exact: false})).toBeInTheDocument();
  })
})

describe('Expanded View Test', () => {
  test('Should render expanded view', () => {
    const thumbnails = [];
    const photos = [];
    mockData.styles[0].photos.forEach((photo, index) => {
      var thumbnail = [index, photo.thumbnail_url];
      thumbnails.push(thumbnail);
      photos.push(photo)
    })
    const expandedView = render(<ExpandedView
      expandedViewOn={true}
      thumbnails={thumbnails}
      photos={photos}
      selectedStyle={mockData.styles[0]}
      selectedPhotoIndex={0}
      thumbnailClick={() => {}}
      photoChange={() => {}}
      toggleExpandedView={() => {}}
      interaction={() => {}} />)
      expect(expandedView.getAllByRole('simple-thumbnail', {exact: false})).toBeDefined();
      expect(expandedView.getAllByRole('big-picture', {exact: false})).toBeDefined();
  })
  test('Simple thumbnail should display at most 7 images at a time', () => {
    const thumbnails = [];
    mockData.styles[0].photos.forEach((photo, index) => {
      var thumbnail = [index, photo.thumbnail_url];
      thumbnails.push(thumbnail);
    })
    const simpleThumbnailsSection = render(<SimpleThumbnails thumbnails={thumbnails} selectedStyle={mockData.styles[0]} selectedPhotoIndex={0} />)
    expect(simpleThumbnailsSection.getAllByRole('simple-thumbnail', {exact: false})).toHaveLength(3);
  })
  test('Normal big picture first display the first photo in the set', () => {
    const photos = [];
    mockData.styles[0].photos.forEach((photo, index) => {
      var thumbnail = [index, photo.thumbnail_url];
      photos.push(photo.url)
    })
    const bigPicture = render(<NormalZoom photos={photos} selectedStyle={mockData.styles[0]} selectedPhotoIndex={0} />)
    expect(bigPicture.getByTestId(photos[0], {exact: false})).toBeInTheDocument();
  })
  test('Switch to the second picture when click the next button', async () => {
    const photos = [];
    mockData.styles[0].photos.forEach((photo, index) => {
      var thumbnail = [index, photo.thumbnail_url];
      photos.push(photo.url)
    })
    const bigPicture = render(<NormalZoom photos={photos} selectedStyle={mockData.styles[0]} selectedPhotoIndex={0} photoChange={() => {}} toggleZoom={() => {}} interaction={() => {}} />)
    fireEvent.click(bigPicture.getByRole('next-arrow'));
    expect(bigPicture.findByTestId(photos[1], {exact: false})).toBeDefined()
  })
  test('Should render max zoom view', () => {
    const photos = [];
    mockData.styles[0].photos.forEach((photo, index) => {
      var thumbnail = [index, photo.thumbnail_url];
      photos.push(photo.url)
    })
    const maxZoomView =  render(<MaxZoomView photos={photos} selectedPhotoIndex={0} toggleZoom={() => {}}/>)
    expect(maxZoomView.getAllByRole('max-zoom-picture', {exact: false})).toBeDefined();
  })
})