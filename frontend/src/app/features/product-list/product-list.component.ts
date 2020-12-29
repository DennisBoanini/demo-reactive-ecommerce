import { Component, ViewChild } from '@angular/core';
import { ProductService } from './services/product.service';
import { ProductState } from './store';
import { Store } from '@ngrx/store';
import * as ProductActions from './store/product.actions';
import { getAllProducts } from './store/product.selector';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { filter, tap } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../../shared/uikit/components/alert/alert.component';
import { AlertData } from '../../shared/uikit/models/alert-data.model';
import { Product } from './models/product.model';

@Component({
	selector: 'demo-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

	public readonly displayedColumns: string[] = ['name', 'description', 'price', 'apply_discount', 'actions'];
	public readonly datasource = new MatTableDataSource([]);
	constructor(
		productService: ProductService,
		private readonly store$: Store<ProductState>,
		private readonly dialog: MatDialog) {

		this.store$.dispatch(ProductActions.LOAD_PRODUCTS_INIT({error: false, products: []}));
		this.store$.select(getAllProducts).pipe(
			tap(products => this.datasource.data = products)
		).subscribe();
	}

	@ViewChild(MatSort)
	public set matSort(sort: MatSort) {
		this.datasource.sort = sort;
	}

	@ViewChild(MatPaginator)
	public set matPaginator(paginator: MatPaginator) {
		this.datasource.paginator = paginator;
	}

	public deleteProduct(product: Product): void {
		const alertData: Partial<AlertData> = {
			warningMessage: `Are you sure you want delete the item "${product.name}"?`
		};

		const dialogRef = this.dialog.open(AlertComponent, {
			data: alertData
		});

		dialogRef.afterClosed()
			.pipe(
				filter(Boolean),
				tap(x => this.store$.dispatch(ProductActions.DELETE_PRODUCTS_INIT({id: product.id, deleting: true, error: false})))
			).subscribe();
	}
}
