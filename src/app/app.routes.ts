import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactsComponent } from './components/contacts/contacts.component';

export const routes: Routes = [
    {
        path:'about', component:AboutComponent
    },
    {
        path:'projects', component:ProjectsComponent
    },
    {
        path:'contact', component:ContactsComponent
    }
    
];
