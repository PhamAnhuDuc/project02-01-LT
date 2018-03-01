import { Component, OnInit } from '@angular/core';
declare var $ :any;
@Component({
	selector: 'app-event-binding',
	templateUrl: './event-binding.component.html',
	styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}
	clickMe1() : void {
		console.log("aaaaaaaaaaa");
	}
	onKeyUp($event) : void {
		if($event.which == 13){
			//console.log($event.target.value);
			$("p#result-tag").append('<span class="label label-info">'+ $event.target.value +'</span>');
			$event.target.value ='';
			

		}
	}
}