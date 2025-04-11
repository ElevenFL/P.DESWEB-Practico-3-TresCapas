class ProductRepository {
    constructor() {
      this.products = [];
    }
  
    getAll() {
      return this.products;
    }
  
    create(product) {
      const newProduct = {
        id: Date.now(),
        ...product
      };
      this.products.push(newProduct);
      return newProduct;
    }
  }
  
  module.exports = new ProductRepository();