import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NevbarComponent } from './components/nevbar/nevbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,NevbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio-Website';
}
