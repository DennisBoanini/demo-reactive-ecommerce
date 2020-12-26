import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'demo-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

	public readonly displayedColumns: string[] = ['name', 'description', 'price', 'apply_discount', 'actions'];
	public readonly data = [];

	constructor() {
		for (let i = 0; i < 20; i++) {
			this.data.push({
				name: `Product name ${i}`,
				desc: `Product description ${i}`,
				price: `${i}.00€`,
				applyDiscount: i % 2 === 0
			});
		}
	}

	public ngOnInit(): void {
	}

}
