import { Component, OnInit } from '@angular/core';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'demo-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

	public readonly displayedColumns: string[] = ['name', 'description', 'price', 'apply_discount', 'actions'];
	public readonly products$: Observable<Product[]>;

	constructor(productService: ProductService) {
		this.products$ = productService.getAllProducts();
	}

	public ngOnInit(): void {
	}

}
