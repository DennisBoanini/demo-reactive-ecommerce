import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
	declarations: [AlertComponent],
	exports: [AlertComponent],
	imports: [
		CommonModule,
		MatDialogModule,
		MatButtonModule
	]
})
export class UikitModule {
}
