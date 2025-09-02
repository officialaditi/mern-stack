import express from 'express';
import dotenv from 'dotenv';
import products from './data/products.js';
import connectDB from './config/db.js';
import color from 'colors'



dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
      res.send('Api running....')
})

// all product 
app.get('/api/products', (req, res) => {
      // use res.json() => to send the json response
      res.json(products);
})

// single product
app.get('/api/products/:id', (req, res) => {
      const product = products.find((prod) => prod.id === req.params.id);
      res.json(product);
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
      console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT} `.bgBlue);
})