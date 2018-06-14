import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "../components/contact/contact.component";
import { FieldWorkComponent } from "../components/field-work/field-work.component";
import { WhatWeDoComponent } from "../components/what-we-do/what-we-do.component";
import { WhoWeAreComponent } from "../components/who-we-are/who-we-are.component";
import { SecondaryTemplateComponent } from "../components/secondary-template/secondary-template.component";
import { DetailTemplateComponent } from "../components/detail-template/detail-template.component";


const APP_ROUTES: Routes = [
	{
		path: 'what-we-do',
		component: WhatWeDoComponent
	},
	{
		path: 'contact',
		component: ContactComponent
	},
	{
		path: '',
		component: FieldWorkComponent
	},
	{
		path: 'who-we-are',
		component: WhoWeAreComponent
	},
	{
		path: 'application-intelligence',
		component: SecondaryTemplateComponent
	}

];

export const routing = RouterModule.forRoot(APP_ROUTES, { useHash: true });
