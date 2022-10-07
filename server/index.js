require('dotenv').config();
const path = require('path');
const axios = require('axios');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

const headers = {headers: {authorization: process.env.TOKEN}};

// Routes //

// products
app.get('/products', async (req, res) => {
  let url = 'http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products?count=20';
  const products = await axios.get(url, headers);
  res.status(200).json(products.data);
})

// product styles
app.get('/products/:product_id/styles', async (req, res) => {
  let url = `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${req.params.product_id}/styles`;
  const styles = await axios.get(url, headers);
  res.status(200).json(styles.data);
})

// product questions
app.get('/qa/questions/:product_id', async (req, res) => {
  let url = `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/qa/questions/?product_id=${req.params.product_id}`;
  const questions = await axios.get(url, headers)
  res.status(200).json(questions.data);
})

// product reviews
app.post('/reviews/:product_id', (req, res) => {
  let sort = req.body;
  let url = `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/?product_id=${req.params.product_id}&count=20&sort=${req.body.sort}`;
  return axios.get(url, headers)
    .then((results) => {
      res.status(200).json(results.data);
    })
})

// product reviews meta
app.get('/reviews/meta/:product_id', (req, res) => {
  let url = `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/meta?product_id=${req.params.product_id}`;
  return axios.get(url, headers)
    .then((results) => {
      res.status(200).json(results.data);
    })
})

// product
app.get('/products/:product_id', (req, res) => {
  let url = `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${req.params.product_id}`;
  return axios.get(url, headers)
          .then(result => {
            res.status(200).json(result.data)})
});

// related products
app.get('/products/:product_id/related', async (req, res) => {
  let url = `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${req.params.product_id}/related`;
  const relatedItems = await axios.get(url, headers);
  res.status(200).json(relatedItems.data);
})


let PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening at Port: ${PORT}`));
