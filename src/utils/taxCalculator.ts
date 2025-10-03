import Product from "../models/Product";
export function calculateTax(product: Product) {
	product.price + product.price * 0.1;
}
