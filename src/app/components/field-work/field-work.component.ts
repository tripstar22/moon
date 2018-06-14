import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
	selector: 'moon-field-work',
	templateUrl: './field-work.component.html',
	styleUrls: ['./field-work.component.scss']
})
export class FieldWorkComponent implements OnInit {

	data: FirebaseListObservable<any[]>;

	constructor(public af: AngularFire) {

		this.data = af.database.list('/data');
	}

	heroHeight() {
		let hero = document.getElementById("hero");
		let wrap = document.getElementById("sectionWrap");
		let h = window.innerHeight;
		hero.style.height = h + "px";
		wrap.style.marginTop = h + "px";
	}

	ngOnInit() {
		this.heroHeight();
	}

}
