import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../models/product.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
	selector: 'demo-apply-discount',
	templateUrl: './apply-discount.component.html',
	styleUrls: ['./apply-discount.component.scss']
})
export class ApplyDiscountComponent implements OnInit {

	public readonly product: Product;
	public discountForm: FormGroup;
	public updatedPrice: Observable<number>;

	constructor(
		formBuilder: FormBuilder,
		private readonly dialogRef: MatDialogRef<ApplyDiscountComponent>,
		@Inject(MAT_DIALOG_DATA) public data: Product) {
		this.discountForm = formBuilder.group({
			discount: formBuilder.control(null, [Validators.required])
		});

		this.product = data;
	}

	public ngOnInit(): void {
		this.updatedPrice = this.discountForm.get('discount').valueChanges;
	}

	public save(): void {
		this.dialogRef.close(this.discountForm.get('discount').value);
	}
}
