import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
	selector: 'moon-secondary-template',
	templateUrl: './secondary-template.component.html',
	styleUrls: ['./secondary-template.component.scss']
})
export class SecondaryTemplateComponent implements OnInit {

	data: FirebaseListObservable<any[]>;

	constructor(public af: AngularFire, private _router:Router) {
		this.data = af.database.list(this._router.url);
	}

	ngOnInit() {
	}
}
