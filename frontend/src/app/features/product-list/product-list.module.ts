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
import { ApplyDiscountComponent } from './components/apply-discount/apply-discount.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductUpdateEffects } from './store/effects/product-update.effects';
import { ProductComponent } from './components/product/product.component';
import { ProductMapper } from './services/product.mapper';


@NgModule({
	declarations: [ProductListComponent, ApplyDiscountComponent, ProductComponent],
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
		EffectsModule.forFeature([ProductEffects, ProductDeleteEffects, ProductUpdateEffects]),
		MatButtonModule,
		MatDialogModule,
		UikitModule,
		MatFormFieldModule,
		MatInputModule,
		ReactiveFormsModule
	],
	providers: [
		ProductService,
		ProductMapper
	]
})
export class ProductListModule {
}
