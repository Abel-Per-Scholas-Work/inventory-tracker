import DigitalProduct from "./models/DigitalProduct";
import PhysicalProduct from "./models/PhysicalProduct";
import type Product from "./models/Product";
import { calculateTax } from "./utils/taxCalculator";

let sku = (): string => `PP-${Math.floor(Math.random() * 1000)}`;
//Physical Product
const bag = new PhysicalProduct(sku(), "LV bag", 3000, 2);

//digital product
const blackMailFile = new DigitalProduct(sku(), "Dirty Laundry", 100, 30);

console.log("Physical Product");
console.log(bag);
console.log(bag.displayDetails());
console.log(bag.getPriceWithTax());
console.log(bag.getWeight);

console.log("Digital Product");
console.log(blackMailFile);
console.log(blackMailFile.displayDetails());
console.log(blackMailFile.getPriceWithTax());
console.log(blackMailFile.getFileSize);

console.log("Utility Tax Calculator");
console.log("This bag cost: ", calculateTax(bag));
console.log("This file cost: ", calculateTax(blackMailFile));

//display all products
let allProduct: Product[] = [bag, blackMailFile];

allProduct.forEach((product) => console.log(product.displayDetails()));
