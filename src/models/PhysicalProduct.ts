import Product from "./Product";

//inteface
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
		return this.price + this.price * 0.1;
	}

	//apply discount
	applyDiscount(): number {
		//check to see if discount is given
		if (this.discountInDollars) {
			let discountPrice = this.price - this.discountInDollars;
			return discountPrice + this.discountInDollars * 0.1;
		}
		// or else  the normal price
		else {
			return this.getPriceWithTax();
		}
	}

	get getWeight(): string {
		return `${this.weight} kg`;
	}
}
