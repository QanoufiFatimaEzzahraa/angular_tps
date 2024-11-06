import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PhotoComponent } from './photo/photo.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, PhotoComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
