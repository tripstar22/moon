import { Component, OnInit, AfterViewChecked, HostListener } from '@angular/core';

@Component({
	selector: 'moon-nav-desktop',
	templateUrl: './nav-desktop.component.html',
	styleUrls: ['./nav-desktop.component.scss']
})
export class NavDesktopComponent implements OnInit, AfterViewChecked {

	constructor() { }

	// // nav toggle active class
	// toggleActiveNav(event) {
	// 	// get all desktop nav anchors
	// 	let items = document.querySelectorAll("#navDesktop a");
	// 	// get event target
	// 	let trgt = event.target;
	// 	let navWrap = document.getElementById("navOuterWrap");
	// 	let b = document.body;
	// 	// loop through items and remove class .activeNav
	// 	for (let i=0; i < items.length; i++) {
	// 		items[i].classList.remove("activeNav");
	// 	}
	// 	// toggle class on target element
	// 	trgt.classList.add("activeNav");
	// 	navWrap.classList.remove("aniNav");
	// 	b.classList.remove("navMobile");
	// }

	navLocation() {
		// get url
		let location = window.location.pathname + window.location.hash;
		// get all menu links
		let items = document.querySelectorAll("#navDesktop li a");
		// add .activeItem to item that corresponds with current page
		if (location == "/#/") {
			items[0].classList.add("activeItem");
		} else if (location == "/#/what-we-do") {
			items[1].classList.add("activeItem");
		} else if (location == "/#/who-we-are") {
			items[2].classList.add("activeItem");
		} else {
			items[3].classList.add("activeItem");
		}
	}

	ngOnInit() {

	}

	ngAfterViewChecked() {
		this.navLocation();
	}

}
