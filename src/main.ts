import DigitalProduct from "./models/DigitalProduct";
import PhysicalProduct from "./models/PhysicalProduct";
import type Product from "./models/Product";
import ProductSort from "./models/ProductSort";
import { calculateTax } from "./utils/taxCalculator";

let sku = (): string => `PP-${Math.floor(Math.random() * 1000)}`;

//Physical Product
const bag = new PhysicalProduct(sku(), "LV bag", 3000, 2);

//physical Product with Discount
const DiscountChair = new PhysicalProduct(sku(), "IKEA Chair", 100, 1); //default discount
const DiscountTable = new PhysicalProduct(sku(), "Ashely Table", 200, 1, 20); //20 dollars of

//digital product
const blackMailFile = new DigitalProduct(sku(), "Dirty Laundry", 100, 30);

const sortResult = new ProductSort();

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

//display the product details anf total
allProduct.forEach((product) => console.log(product.displayDetails()));
console.log(`Total price: $${TotalPrice}`);

//sort
console.log(
	"Sorting Products by name: \n",
	sortResult.sortByName([...allProduct])
);
console.log(allProduct);
// console.log(
"Sorting Products by price: \n", sortResult.sortByPrice([...allProduct]);
// );
