import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-binding',
	templateUrl: './binding.component.html',
	styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
	title : string  = "Binding Component123";
	link :string = 'https://angular.io/guide/template-syntax#interpolation----';
	persionObj : any = { 
		'name':'Nguyễn Văn A',
		'age' : 18

	};
	showInfo(){
		return this.persionObj.name + "-" + this.persionObj.age;
	}
	constructor() { }

	ngOnInit() {
	}

}
