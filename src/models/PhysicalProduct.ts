import Product from "./Product";

export default class PhysicalProduct extends Product {
	weight: number;

	constructor(sku: string, name: string, price: number, weight: number) {
		super(sku, name, price);
		this.weight = weight;
	}

	getPriceWithTax(): number {
		return this.price + this.price * 0.1;
	}

	get getWeight(): string {
		return `${this.weight} kg`;
	}
}
