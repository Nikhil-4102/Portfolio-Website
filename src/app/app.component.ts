import { Component } from '@angular/core';

import { NevbarComponent } from './components/nevbar/nevbar.component';
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactsComponent } from "./components/contacts/contacts.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [ NevbarComponent, HomeComponent, AboutComponent, ProjectsComponent, ContactsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio-Website';
  // Angular - app.component.ts
ngOnInit() {
  const homeLink = document.querySelector('a[href="/"]');
  if (homeLink) {
    homeLink.addEventListener('click', (e) => {
      e.preventDefault(); // prevent hard reload
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

}
