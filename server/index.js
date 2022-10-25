require('dotenv').config();
const path = require('path');
const axios = require('axios');
const express = require('express');
const compression = require('compression');
const Promise = require("bluebird");
const cloudinary = require("cloudinary").v2;

const app = express();
//app.use(compression());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true, limit: '50mb'}));
app.use(express.static(path.join(__dirname, '../client/dist')));

const headers = {headers: {authorization: process.env.TOKEN}};
const root = 'http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp'

// Routes //

// get all products
app.get('/products', async (req, res) => {
  let url = `${root}/products?count=20`;
  const products = await axios.get(url, headers);
  res.status(200).json(products.data);
})

// get product by id
app.get('/products/:product_id', (req, res) => {
  let url = `${root}/products/${req.params.product_id}`;
  return axios.get(url, headers)
          .then(result => {
            res.status(200).json(result.data)})
});

// get product styles
app.get('/products/:product_id/styles', async (req, res) => {
  let url = `${root}/products/${req.params.product_id}/styles`;
  const styles = await axios.get(url, headers);
  res.status(200).json(styles.data);
})

/* ---- QA ---- */

// get questions
app.get('/qa/questions/:product_id', (req, res) => {
  let url = `${root}/qa/questions/?product_id=${req.params.product_id}&count=300`;
  axios.get(url, headers)
  .then((response) => res.status(200).json(response.data))
  .catch((err) => console.error(err))
})

// get answers
app.get('/qa/questions/:question_id/answers', (req, res) => {
  let url = `${root}/qa/questions/${req.params.question_id}/answers?count=300`;
  axios.get(url, headers)
  .then((response) => res.status(200).json(response.data))
  .catch((err) => console.error(err))
})

// post a question
app.post('/qa/questions', (req, res) => {
  let url = `${root}/qa/questions`;
  axios.post(url, req.body, headers)
  .then((response) => {
    console.log('Success Creating Question');
    console.log('Response', response);
    res.status(201).json(response.data)
  })
  .catch((err) => { console.error(err) })
})

// post an answer
app.post('/qa/questions/:question_id/answers', (req, res) => {
  let url = `${root}/qa/questions/${req.params.question_id}/answers`;
  axios.post(url, req.body, headers)
  .then((response) => {
    console.log('Success Creating Answer');
    res.status(201).json(response.data)
  })
  .catch((err) => { console.error(err) })
})

// mark question helpful
app.put('/qa/questions/:question_id/helpful', (req, res) => {
  let url = `${root}/qa/questions/${req.params.question_id}/helpful`;
  axios.put(url, {}, headers)
  .then((response) => res.status(204).json(response.data))
  .catch((err) => console.error(err))
})

// mark answer helpful
app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  let url = `${root}/qa/questions/${req.params.answer_id}/helpful`;
  axios.put(url, {}, headers)
  .then((response) => res.status(204).json(response.data))
  .catch((err) => console.error(err))
})

// report question
app.put('/qa/questions/:question_id/report', (req, res) => {
  let url = `${root}/qa/questions/${req.params.question_id}/helpful`;
  axios.put(url, {}, headers)
  .then((response) => res.status(204).json(response.data))
  .catch((err) => console.error(err))
})

// report answer
app.put('/qa/answers/:answer_id/report', (req, res) => {
  let url = `${root}/qa/questions/${req.params.answer_id}/helpful`;
  axios.put(url, {}, headers)
  .then((response) => res.status(204).json(response.data))
  .catch((err) => console.error(err))
})


/* ---- Reviews ---- */

// product reviews
app.post('/reviews/:product_id', (req, res) => {
  // console.log('reviews sort and count: ', req.body);
  let url = `${root}/reviews/?product_id=${req.params.product_id}&sort=${req.body.sort}&count=${req.body.count}`;
  return axios.get(url, headers)
    .then((results) => {
      res.status(200).json(results.data);
    })
})

// update review helpful & report
app.put('/reviews/:review_id/helpful', (req, res) => {
  let url = `${root}/reviews/${req.params.review_id}/helpful`;
  return axios.put(url,{}, headers)
   .then(() => {
    res.status(200).json('just updated helpful');
   })
})
app.put('/reviews/:review_id/report', (req, res) => {
  let url =`${root}/reviews/${req.params.review_id}/report`;
  return axios.put(url, {}, headers)
    .then(() => {
      res.sendStatus(204);
    })
})

// add product reviews
app.post('/addReview', (req, res) => {
  let url = `${root}/reviews`;
  const {review} = req.body;
  console.log('new Review in server: ', review);
  //let newObj = {};
  for (let key in review.characteristics) {
    review.characteristics[key] = parseInt(review.characteristics[key]);
  }
  //reviews.characteristics =newObj;
  console.log("after: ", review);
  return axios.post(url, req.body.review, headers)
    .then(() => {
      res.status(201).json('added!');
    })
    .catch((err) => {
      console.log('add review err: ', err);
    })
})

// upload pics to imgbb.com image hosting
app.post('/upload', (req, res) => {
  let promises = []
  req.body.images.forEach((image) => {
    promises.push(cloudinary.uploader.upload(image))
  })
  Promise.all(promises)
    .then((results) => {
      res.status(201).json(results);
    })
    .catch((err) => console.log('upload error: ', error));
})

// product reviews meta
app.get('/reviews/meta/:product_id', (req, res) => {
  let url = `${root}/reviews/meta?product_id=${req.params.product_id}`;
  return axios.get(url, headers)
    .then((results) => {
      res.status(200).json(results.data);
    })
})


// product
app.get('/products/:product_id', (req, res) => {
  let url = `${root}/products/${req.params.product_id}`;
  return axios.get(url, headers)
          .then(result => {
            res.status(200).json(result.data)})
});


// related products
app.get('/products/:product_id/related', async (req, res) => {
  let url = `${root}/products/${req.params.product_id}/related`;
  const relatedItems = await axios.get(url, headers);
  res.status(200).json(relatedItems.data);
})

// send interactions detail to API
app.post('/interactions', (req, res) => {
  let url = `${root}/interactions`;
  const {element, widget, time} = req.body;
  axios.post(url, {element, widget, time}, headers)
    .then((result) => {
      console.log('interactions message: ', result.statusText);
      res.status(result.status).json('just created')
    })
})

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening at Port: ${PORT}`));
