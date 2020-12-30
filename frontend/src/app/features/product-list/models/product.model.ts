export interface Product {
	id: number;
	name: string;
	description: string;
	originalPrice: number;
	discount: number;
	quantity: number;
}

export type ProductSave = Omit<Product, 'id'>;
