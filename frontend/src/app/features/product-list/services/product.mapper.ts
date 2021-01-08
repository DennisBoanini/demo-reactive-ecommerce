import { Injectable } from '@angular/core';
import { Product, ProductSave } from '../models/product.model';
import { FormGroup } from '@angular/forms';

@Injectable()
export class ProductMapper {

	public formToModelSave(productForm: FormGroup): ProductSave {
		return {
			name: productForm.get('name').value,
			description: productForm.get('description').value,
			quantity: productForm.get('quantity').value,
			originalPrice: productForm.get('price').value,
			discount: productForm.get('discount').value
		};
	}

	public formToModelUpdate(productForm: FormGroup): Product {
		return {
			id: productForm.get('id').value,
			name: productForm.get('name').value,
			description: productForm.get('description').value,
			quantity: productForm.get('quantity').value,
			originalPrice: productForm.get('price').value,
			discount: productForm.get('discount').value
		};
	}
}
