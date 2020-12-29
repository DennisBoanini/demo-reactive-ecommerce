import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import * as fromProducts from './store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/effects/product.effects';
import { MatButtonModule } from '@angular/material/button';
import { UikitModule } from '../../shared/uikit/uikit.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ProductDeleteEffects } from './store/effects/product-delete.effects';


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
		MatCheckboxModule,
		StoreModule.forFeature(fromProducts.productsFeatureKey, fromProducts.reducers, {metaReducers: fromProducts.metaReducers}),
		EffectsModule.forFeature([ProductEffects, ProductDeleteEffects]),
		MatButtonModule,
		MatDialogModule,
		UikitModule
	],
	providers: [
		ProductService
	]
})
export class ProductListModule {
}
