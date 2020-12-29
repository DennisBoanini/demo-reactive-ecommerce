import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

	constructor(private readonly http: HttpClient) {
	}

	public getAllProducts(): Observable<Product[]> {
		const data: Array<Product> = [];
		for (let i = 0; i < 100; i++) {
			const product: Product = {
				id: i,
				name: `Product name ${i}`,
				description: `Product description ${i}`,
				price: i,
				isDiscountApplied: i % 2 === 0
			};

			data.push(product);
		}

		return of(data);
	}

	public delete(id: number): Observable<void> {
		console.log('Delete products with id ', id);

		return of(void 0);
	}
}
