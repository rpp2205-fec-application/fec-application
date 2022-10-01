require('dotenv').config();
const path = require('path');
const axios = require('axios');
const express = require('express'); // npm installed
const app = express();
app.use(express.static(path.join(__dirname, '../client/dist')));
// other configuration...
app.get('/review', (req, res) => {
  let url = "http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/?product_id=71697";
  axios.get(url, {headers: {authorization: process.env.TOKEN}})
    .then((results) => {
      console.log('results: ', results.data);
      return results.data;
    })
})




let PORT = process.env.PORT || 3000;
app.listen(PORT);