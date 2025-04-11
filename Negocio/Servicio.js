const productRepository = require('../data/product.repository');

class ProductService {
  async getProducts() {
    return await productRepository.getAll();
  }

  async addProduct(productData) {
    if (!productData.name || !productData.price) {
      throw new Error('Nombre y precio son requeridos');
    }
    
    return await productRepository.create({
      name: productData.name,
      price: parseFloat(productData.price)
    });
  }
}

module.exports = new ProductService();