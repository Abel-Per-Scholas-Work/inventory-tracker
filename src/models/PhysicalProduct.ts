import Product from "./Product";

//interface
interface DiscountableProduct {
	applyDiscount(): number;
}

export default class PhysicalProduct
	extends Product
	implements DiscountableProduct
{
	weight: number;
	discountInDollars?: number;

	constructor(
		sku: string,
		name: string,
		price: number,
		weight: number,
		discountInDollars?: number
	) {
		super(sku, name, price);
		this.weight = weight;
		this.discountInDollars = discountInDollars;
	}

	getPriceWithTax(): number {
		//first version
		// return this.price + this.price * 0.1;

		//after implementing the DiscountableProduct interface
		return this.applyDiscount();
	}

	//apply discount
	applyDiscount(): number {
		//check to see if discount is given
		if (this.discountInDollars) {
			let discountPrice = this.price - this.discountInDollars;
			return discountPrice + this.discountInDollars * 0.1;
		}

		return this.price + this.price * 0.1;
	}

	get getWeight(): string {
		return `${this.weight} kg`;
	}
}
