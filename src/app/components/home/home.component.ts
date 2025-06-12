import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

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
