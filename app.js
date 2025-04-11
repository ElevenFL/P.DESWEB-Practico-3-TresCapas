const express = require('express');
const productController = require('./presentation/product.controller');

const app = express();
app.use(express.json());
app.use(productController);

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});