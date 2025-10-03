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
	//bulk discount in %
	//applied to physical product with weight 50 or more a 20 OFF discount on the item
	static bulkDiscount = 20;

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
			//apply the bulk discount
			if (this.weight > 50) {
				let bulkDiscountPrice = discountPrice - PhysicalProduct.bulkDiscount;
				return bulkDiscountPrice + bulkDiscountPrice * 0.1;
			} else {
				return discountPrice + discountPrice * 0.1;
			}
		} else {
			if (this.weight > 50) {
				let bulkDiscountPrice = this.price - PhysicalProduct.bulkDiscount;
				return bulkDiscountPrice + bulkDiscountPrice * 0.1;
			} else {
				return this.price + this.price * 0.1;
			}
		}
	}

	get getWeight(): string {
		return `${this.weight} kg`;
	}
}
