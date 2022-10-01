require('dotenv').config();
const path = require('path');
const axios = require('axios');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));

// other configuration...
app.get('/products', async (req, res) => {
  let url = "http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/products";
  const products = await axios.get(url, {headers: {authorization: process.env.TOKEN}});
  console.log(products.data);
  res.status(200).json(products.data);
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
