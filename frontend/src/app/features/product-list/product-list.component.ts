import { Component, ViewChild } from '@angular/core';
import { ProductState } from './store';
import { Store } from '@ngrx/store';
import * as ProductActions from './store/actions/product.actions';
import * as ProductDeleteActions from './store/actions/product-delete.actions';
import { getAllProducts } from './store/selector/product.selector';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { filter, tap } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AlertData } from '../../shared/uikit/models/alert-data.model';
import { Product } from './models/product.model';
import { AlertComponent } from '../../shared/uikit/components/alert/alert.component';
import { ApplyDiscountComponent } from './components/apply-discount/apply-discount.component';
import * as ProductUpdateActions from '../product-list/store/actions/product-update.actions';
import * as ProductInsertActions from '../product-list/store/actions/product-insert.actions';
import { isNil } from 'lodash';
import { ProductComponent } from './components/product/product.component';

@Component({
	selector: 'demo-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

	public readonly displayedColumns: string[] = ['name', 'description', 'price', 'discount', 'quantity', 'actions'];
	public readonly datasource = new MatTableDataSource([]);
	constructor(
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
				tap(() => this.store$.dispatch(ProductDeleteActions.DELETE_PRODUCTS_INIT({id: product.id, deleting: true, error: false})))
			).subscribe();
	}

	public addDiscount(product: Product): void {
		const dialogRef = this.dialog.open(ApplyDiscountComponent, {
			data: product
		});

		dialogRef.afterClosed().pipe(
			tap(discountApplied => {
				if (isNil(discountApplied)) {
					return;
				}

				this.store$.dispatch(ProductUpdateActions.UPDATE_PRODUCT_INIT({ product: { ...product, discount: discountApplied } }));
			})
		).subscribe();
	}

	public addNewProduct(): void {
		const dialogRef = this.dialog.open(ProductComponent);

		dialogRef.afterClosed()
			.pipe(
				tap(product => {
					if (isNil(product)) {
						return;
					}

					this.store$.dispatch(ProductInsertActions.INSERT_PRODUCTS_INIT({ product }));
				})
			).subscribe();
	}
}
