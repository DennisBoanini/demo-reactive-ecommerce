import { Component } from '@angular/core';
import { Product } from './models/product.model';
import { ProductService } from './services/product.service';
import { Observable } from 'rxjs';
import { ProductState } from './store';
import { select, Store } from '@ngrx/store';
import * as ProductActions from './store/product.actions';
import { getAllProducts } from './store/product.selector';

@Component({
	selector: 'demo-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

	public readonly displayedColumns: string[] = ['name', 'description', 'price', 'apply_discount', 'actions'];
	public readonly products$: Observable<Product[]> = this.store$.pipe(select(getAllProducts));

	constructor(productService: ProductService, private readonly store$: Store<ProductState>) {
		this.store$.dispatch(ProductActions.LOAD_PRODUCTS_INIT({error: false, products: []}));
	}
}
