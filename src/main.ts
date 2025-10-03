import PhysicalProduct from "./models/PhysicalProduct";

let sku = `PP-${Math.random() * 1000}`;
const bag = new PhysicalProduct(sku, "LV bag", 3000, 2);

console.log(bag);
console.log(bag.displayDetails());
console.log(bag.getPriceWithTax());
console.log(bag.getWeight);
