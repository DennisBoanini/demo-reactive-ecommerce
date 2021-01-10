import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { filter, tap } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AlertData } from '../../shared/uikit/models/alert-data.model';
import { Product } from './models/product.model';
import { AlertComponent } from '../../shared/uikit/components/alert/alert.component';
import { ApplyDiscountComponent } from './components/apply-discount/apply-discount.component';
import { isNil } from 'lodash-es';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './services/product.service';
import { ProductState } from './store/product.reducer';
import { Store } from '@ngrx/store';
import { loadProductsInit } from './store/product.action';
import { getProducts } from './store/product.selector';

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
		private readonly productService: ProductService,
		private readonly dialog: MatDialog) {

		this.store$.dispatch(loadProductsInit());
		this.store$.select(getProducts).pipe(
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

				})
			).subscribe();
	}

	public editProduct(product: Product): void {
		const dialogRef = this.dialog.open(ProductComponent, {
			data: product
		});

		dialogRef.afterClosed()
			.pipe(
				tap(product => {
					if (isNil(product)) {
						return;
					}

				})
			).subscribe();
	}
}
