import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorUtils } from '../../../../core/utils/validator-utils';
import { ProductMapper } from '../../services/product.mapper';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'demo-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent {

	public productForm: FormGroup;

	constructor(
		formBuilder: FormBuilder,
		private readonly dialogRef: MatDialogRef<ProductComponent>,
		private readonly productMapper: ProductMapper) {
		this.productForm = formBuilder.group({
			name: formBuilder.control(null, [Validators.required]),
			description: formBuilder.control(null, [Validators.required]),
			price: formBuilder.control(null, [Validators.required, ValidatorUtils.priceValidator()]),
			quantity: formBuilder.control(null, [Validators.required]),
			discount: formBuilder.control(null, [Validators.min(0), Validators.max(100)])
		});
	}

	public save(): void {
		this.dialogRef.close(this.productMapper.formToModel(this.productForm));
	}
}
