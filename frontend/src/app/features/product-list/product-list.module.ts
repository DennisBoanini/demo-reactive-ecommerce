import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
	declarations: [ProductListComponent],
	imports: [
		CommonModule,
		ProductListRoutingModule,
		HttpClientModule,
		MatCardModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatIconModule,
		MatCheckboxModule
	],
	providers: [
		ProductService
	]
})
export class ProductListModule {
}
