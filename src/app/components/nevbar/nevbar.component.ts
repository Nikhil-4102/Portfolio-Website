import { Component } from '@angular/core';
import { RouterLink , RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-nevbar',
  imports: [],
  templateUrl: './nevbar.component.html',
  styleUrl: './nevbar.component.scss'
})
export class NevbarComponent {
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
