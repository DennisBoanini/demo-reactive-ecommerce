import { Component, ViewChild } from '@angular/core';
import { ProductService } from './services/product.service';
import { ProductState } from './store';
import { Store } from '@ngrx/store';
import * as ProductActions from './store/product.actions';
import { getAllProducts } from './store/product.selector';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { tap } from 'rxjs/operators';

@Component({
	selector: 'demo-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

	public readonly displayedColumns: string[] = ['name', 'description', 'price', 'apply_discount', 'actions'];
	public readonly datasource = new MatTableDataSource([]);

	constructor(productService: ProductService, private readonly store$: Store<ProductState>) {
		this.store$.dispatch(ProductActions.LOAD_PRODUCTS_INIT({error: false, products: []}));
		this.store$.select(getAllProducts).pipe(
			tap(products => this.datasource.data = products)
		).subscribe();
	}

	@ViewChild(MatSort)
	public set matSort(sort: MatSort) {
		this.datasource.sort = sort;
	}
}
