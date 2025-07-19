import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { EduComponent } from './components/edu/edu.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
        
    {
        path:'about', component:AboutComponent
    },
    {
        path:'projects', component:ProjectsComponent
    },
    {
        path:'edu_exp', component:EduComponent
    },
    {
        path:'contact', component:ContactsComponent
    }
    
];
