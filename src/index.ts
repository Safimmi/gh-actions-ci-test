import { Product } from './Product';
import { Inventory } from './Inventory';

const inventory = new Inventory();

const productA = new Product('Sunglasses', 11);
const productB = new Product('Baseball Caps', 20);

inventory.addProduct(productA);
inventory.addProduct(productB);

console.log(inventory.getAmount('Sunglasses'));
console.log(inventory.getAmount('Baseball Caps'));

inventory.deleteProduct('Sunglasses');
console.log(inventory.getAmount('Sunglasses'));