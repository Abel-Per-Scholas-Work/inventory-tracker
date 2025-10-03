import DigitalProduct from "./models/DigitalProduct";
import PhysicalProduct from "./models/PhysicalProduct";
import type Product from "./models/Product";
import { calculateTax } from "./utils/taxCalculator";

let sku = (): string => `PP-${Math.floor(Math.random() * 1000)}`;

//Physical Product
const bag = new PhysicalProduct(sku(), "LV bag", 3000, 2);

//physical Product with Discount
const DiscountChair = new PhysicalProduct(sku(), "Plumbing Tape", 100, 1); //default dicsount
const DiscountTable = new PhysicalProduct(sku(), "Plumbing Tape", 200, 1, 20); //20 dollars of

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

//Array of all products
let allProduct: Product[] = [bag, blackMailFile, DiscountChair, DiscountTable];
let TotalPrice = 0;

//calculate the total
allProduct.forEach((product) => {
	console.log(product.getPriceWithTax());
	return (TotalPrice += product.getPriceWithTax());
});

//display the product details
allProduct.forEach((product) => console.log(product.displayDetails()));
//display the total
console.log(`Total price: $${TotalPrice}`);
