import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertData } from '../../models/alert-data.model';

@Component({
	selector: 'demo-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

	constructor(@Inject(MAT_DIALOG_DATA) public data: AlertData) {}

	ngOnInit(): void {
	}

}
