import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { routing } from './routing/app.routing';
import { ContactComponent } from './components/contact/contact.component';
import { FieldWorkComponent } from './components/field-work/field-work.component';
import { NavDesktopComponent } from './components/nav-desktop/nav-desktop.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';

// Specific Component Pages
import { SecondaryTemplateComponent } from './components/secondary-template/secondary-template.component';
import { DetailTemplateComponent } from './components/detail-template/detail-template.component';

// Firebase config
export const firebaseConfig = {
	apiKey: 'AIzaSyCV-uvbIjlVtAsX9zXoAuLHwFvZ4epjo9U',
	authDomain: 'moon-app-8de74.firebaseapp.com',
	databaseURL: 'https://moon-app-8de74.firebaseio.com',
	storageBucket: 'moon-app-8de74.appspot.com',
	messagingSenderId: '453735605628'
};

@NgModule({
	declarations: [
		AppComponent,
		ContactComponent,
		FieldWorkComponent,
		NavDesktopComponent,
		FooterComponent,
		SecondaryTemplateComponent,
		DetailTemplateComponent,
		WhatWeDoComponent,
		WhoWeAreComponent
	],
	imports: [
		// FlexLayoutModule.forRoot(),
		AngularFireModule.initializeApp(firebaseConfig),
		BrowserModule,
		FormsModule,
		HttpModule,
		routing
	],
	providers: [
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
