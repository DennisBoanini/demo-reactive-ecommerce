import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';

@Component({
	selector: 'demo-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

	public readonly displayedColumns: string[] = ['name', 'description', 'price', 'apply_discount', 'actions'];
	public readonly data: Array<Product> = [];

	constructor() {
		for (let i = 0; i < 20; i++) {
			const product: Product = {
				id: i,
				name: `Product name ${i}`,
				description: `Product description ${i}`,
				price: i,
				isDiscountApplied: i % 2 === 0
			};

			this.data.push(product);
		}
	}

	public ngOnInit(): void {
	}

}
