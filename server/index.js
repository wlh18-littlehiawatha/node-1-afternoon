const express = require('express');
// const products = require('../products.json')  no longer needed (step 4 removed)
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');

const app = express();

const PORT = 4001;

app.get('/api/products', getProducts);
//(step 4 removed) ----> placed in getProducts folder //
// app.get('/api/products', (req, res) => {  
//    res.status(200).send(products)
// });

app.get('/api/product/:id', getProduct);

app.listen(PORT, ( ) => {
   console.log(`Server listening on port: ${PORT}`);
});