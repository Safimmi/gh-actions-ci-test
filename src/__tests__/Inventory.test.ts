import { Product } from '../Product';
import { Inventory } from '../Inventory';

describe('Inventory', () => {
  let inventory: Inventory;

  beforeEach(() => {
    inventory = new Inventory();
  });

  test('should add a product to the inventory', () => {
    const product = new Product('Sunglasses', 10);
    inventory.addProduct(product);

    expect(inventory.getAmount('Sunglasses')).toBe(10);
  });

  test('should increase the quantity if the product already exists', () => {
    const productA1 = new Product('Sunglasses', 10);
    const productA2 = new Product('Sunglasses', 5);
    inventory.addProduct(productA1);
    inventory.addProduct(productA2);

    expect(inventory.getAmount('Sunglasses')).toBe(15);
  });

  test('should return product not found message if the product does not exist', () => {
      expect(inventory.getAmount('Rings')).toBe('Product Not Found!');
  });

  test('should remove a product from the inventory', () => {
      const product = new Product('Sunglasses', 10);
      inventory.addProduct(product);
      inventory.deleteProduct('Sunglasses');

      expect(inventory.getAmount('Sunglasses')).toBe('Product Not Found!');
  });

  test('should return product not found message when trying to remove a non-existent product', () => {
      expect(inventory.deleteProduct('Rings')).toBe('Product Not Found!');
  });
});