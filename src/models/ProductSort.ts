import Product from "./Product";

export default class ProductSort {
	item: Product[] = [];

	sortByPrice(): Product[] {
		return this.item.sort((a, b) => a.price - b.price);
	}
	sortByName(): Product[] {
		return this.item.sort((a, b) => {
			const nameA = a.name.toUpperCase();
			const nameB = b.name.toUpperCase();
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		});
	}
}
