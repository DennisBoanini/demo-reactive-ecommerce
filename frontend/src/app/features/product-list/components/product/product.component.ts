import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorUtils } from '../../../../core/utils/validator-utils';
import { ProductMapper } from '../../services/product.mapper';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../models/product.model';

@Component({
	selector: 'demo-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent {

	public productForm: FormGroup;

	constructor(
		formBuilder: FormBuilder,
		@Inject(MAT_DIALOG_DATA) public data: Product,
		private readonly dialogRef: MatDialogRef<ProductComponent>,
		private readonly productMapper: ProductMapper) {
		if (data === null) {
			this.productForm = formBuilder.group({
				name: formBuilder.control(null, [Validators.required]),
				description: formBuilder.control(null, [Validators.required]),
				price: formBuilder.control(null, [Validators.required, ValidatorUtils.priceValidator()]),
				quantity: formBuilder.control(null, [Validators.required]),
				discount: formBuilder.control(null, [Validators.min(0), Validators.max(100)])
			});
		} else {
			this.productForm = formBuilder.group({
				id: formBuilder.control(data.id),
				name: formBuilder.control(data.name, [Validators.required]),
				description: formBuilder.control(data.description, [Validators.required]),
				price: formBuilder.control(data.originalPrice, [Validators.required, ValidatorUtils.priceValidator()]),
				quantity: formBuilder.control(data.quantity, [Validators.required]),
				discount: formBuilder.control(data.discount, [Validators.min(0), Validators.max(100)])
			});
		}

	}

	public save(): void {
		this.dialogRef.close(this.data === null ?
			this.productMapper.formToModelSave(this.productForm) :
			this.productMapper.formToModelUpdate(this.productForm));
	}
}
