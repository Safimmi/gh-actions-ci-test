import { Product } from './Product';

export class Inventory {
  products: { [key: string]: Product };

  constructor() {
    this.products = {};
  }

  addProduct(product: Product): void {
    if (this.products[product.name]) {
      this.products[product.name].amount += product.amount;
    } else {
      this.products[product.name] = product;
    }
  }

  getAmount(productName: string): number | string {
    if (this.products[productName]) {
      return this.products[productName].amount;
    } else {
      return 'Product Not Found!';
    }
  }

  deleteProduct(productName: string): string | void {
      if (this.products[productName]) {
          delete this.products[productName];
      } else {
          return 'Product Not Found!';
      }
  }
}


