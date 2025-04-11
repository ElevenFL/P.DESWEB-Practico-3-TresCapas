const express = require('express');
const productService = require('../business/product.service');

const router = express.Router();

router.post('/products', async (req, res) => {
  try {
    const newProduct = await productService.addProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/products', async (req, res) => {
  const products = await productService.getProducts();
  res.json(products);
});

module.exports = router;