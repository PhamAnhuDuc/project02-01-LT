import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-ng-style',
	templateUrl: './ng-style.component.html',
	styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
	canSave : boolean = true;
	isUnchanged : boolean = true;
	isSpecial : boolean = true;
	constructor() { }

	ngOnInit() {
	}
	setCurrentStyles() {
  // CSS styles: set per current state of component properties
  return  {
  	'font-style':  this.canSave      ? 'italic' : 'normal',
  	'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
  	'font-size':   this.isSpecial    ? '24px'   : '12px'
  };

}
}
