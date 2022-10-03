require('dotenv').config();
const path = require('path');
const axios = require('axios');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

const headers = {headers: {authorization: process.env.TOKEN}};
// other configuration...
app.get('/products', async (req, res) => {
  let url = "http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products?count=20";
  const products = await axios.get(url, headers);
  res.status(200).json(products.data);
})

app.get('/products/:product_id/styles', async (req, res) => {
  let url = `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products/${req.params.product_id}/styles`;
  const styles = await axios.get(url, headers);
  res.status(200).json(styles.data);
})

app.post('/review', (req, res) => {
  let url = `http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/?product_id=${req.body.id}`;
  return axios.get(url, {headers: {authorization: process.env.TOKEN}})
    .then((results) => {
      res.status(200).json(results.data);
    })
})

// app.get('/QA', (req, res) => {
//   axios.get()
// })


let PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening at Port: ${PORT}`));
