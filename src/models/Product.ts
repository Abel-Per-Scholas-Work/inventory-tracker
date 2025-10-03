export default class Product {
	private sku: string;
	public name: string;
	public price: number;

	constructor(sku: string, name: string, price: number) {
		this.sku = sku;
		this.name = name;
		this.price = price;
	}

	displayDetails(): string {
		return `The product ${this.name} (SKU: ${this.sku}) is priced at ${this.price}`;
	}

	getPriceWithTax(): number {
		return this.price + this.price * 0.1;
	}
}
