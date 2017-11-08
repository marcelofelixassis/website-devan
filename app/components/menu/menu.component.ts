import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  	constructor() { }

	ngOnInit(){

		$('.mu-menu-btn').on('click', function(event) {
	        event.preventDefault();
	        $('.mu-menu-full-overlay').addClass('mu-menu-full-overlay-show');
	    });
	   
	    // when click colose btn	    
	    $('.mu-menu-close-btn').on('click', function(event) {
		    event.preventDefault();
			$('.mu-menu-full-overlay').removeClass('mu-menu-full-overlay-show');
	    });

	    // when click menu item overlay disappear
	    $('.mu-menu a').on('click', function(event) {
	        event.preventDefault();
	        $('.mu-menu-full-overlay').removeClass('mu-menu-full-overlay-show');  
	    });
	}
}
