import { AbstractControl, ValidatorFn } from '@angular/forms';

export class ValidatorUtils {

	public static priceValidator(): ValidatorFn {
		return (control: AbstractControl): {[key: string]: any} | null => {
			const onlyPriceRegex: RegExp = /^[1-9]([0-9]?)+(,\d{1,2})?$/;
			const forbidden = !onlyPriceRegex.test(control.value);
			return forbidden ? {invalidPrice: {value: control.value}} : null;
		};
	}
}
