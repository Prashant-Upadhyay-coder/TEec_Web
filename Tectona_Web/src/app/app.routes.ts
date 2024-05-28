import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CertificationComponent } from './certification/certification.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { 
      path: 'about', 
     loadComponent:()=> import('./about-us/about-us.component').then((c)=> c.AboutUsComponent)
    },
    { path: 'certificate', component: CertificationComponent },
    { path: 'Contact_us', component: ContactUsComponent },
    { path: '**', component: HomeComponent }
];
