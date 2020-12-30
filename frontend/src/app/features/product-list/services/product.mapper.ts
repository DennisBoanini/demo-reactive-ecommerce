import { Injectable } from '@angular/core';
import { Product, ProductSave } from '../models/product.model';
import { FormGroup } from '@angular/forms';

@Injectable()
export class ProductMapper {

	public formToModel(productForm: FormGroup): ProductSave {
		return {
			name: productForm.get('name').value,
			description: productForm.get('description').value,
			quantity: productForm.get('quantity').value,
			originalPrice: productForm.get('price').value,
			discount: productForm.get('discount').value
		};
	}
}
