import { Injectable } from '@angular/core';
import { interval, Observable, of, timer } from 'rxjs';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';
import { debounce, delay, tap, timeout } from 'rxjs/operators';

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
		return of(void 0)
			.pipe(
				delay(3000),
				tap(() => console.log('Should delete product with id', id))
			);
	}
}
