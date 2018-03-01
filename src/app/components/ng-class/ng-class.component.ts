import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ng-class',
	templateUrl: './ng-class.component.html',
	styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
	isSpecial : boolean = true;
	constructor() { }

	ngOnInit() {
	}
	addClass(){
		return {
			'glyphicon-th' : !this.isSpecial,
	 		'glyphicon-list': this.isSpecial
		}
	}
}
