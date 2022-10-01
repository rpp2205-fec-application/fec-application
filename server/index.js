require('dotenv').config();
const path = require('path');
const axios = require('axios');
const express = require('express'); // npm installed
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

app.get('/review', (req, res) => {
  let url = "http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/?product_id=71697";
  return axios.get(url, {headers: {authorization: process.env.TOKEN}})
    .then((results) => {
      // console.log('results: ', results.data);
      res.status(200).json(results.data);
    })
})




let PORT = process.env.PORT || 3000;
app.listen(PORT);