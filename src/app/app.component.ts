import { Component, OnInit, AfterViewChecked } from '@angular/core';

@Component({
	selector: 'moon-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {


	constructor() {
	}
	// remove footer for contact component
	// bc info is already on pg
	footerContact() {
		// get url
		let location = window.location.pathname + window.location.hash;
		// get footer
		let footer = document.getElementById("footer");
		// if url equals /contact
		// remove footer
		if (location == "/#/contact") {
			footer.style.display = "none";
		} else {
			// else url doesn't equal /contact
			// keep or replace footer
			footer.style.display = "block";
		}
	}

	navMobileTgl($event) {
		let location = window.location.pathname;
		let b = document.body;
		let wrap = document.getElementById("sectionWrap");
		if (location == "/") {
			if (b.classList.contains("navMobile")) {
				wrap.classList.add("activeNav");
			}
		} else {
			// do nothing
		}
	}

	aniNav($event) {
		let b = document.body;
		let trigger = document.getElementById("menu");
		let img = trigger.children[0];
		let nav = document.getElementById("nav");
		let navWrap = document.getElementById("navOuterWrap");
		b.classList.toggle("navMobile");
		img.classList.toggle("aniMenu");
		navWrap.classList.toggle("aniNav");
		event.preventDefault();
	}

	wrapWidth($event) {
		let w = window;
		let wrap = document.getElementById("appWrap");
		wrap.style.width = w.innerWidth + "px";
	}

	ngOnInit() {

	}

	ngAfterViewChecked() {
		this.footerContact();
	}
}
