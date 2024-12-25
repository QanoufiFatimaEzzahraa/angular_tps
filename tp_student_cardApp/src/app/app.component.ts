import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { PhotoComponent } from './photo/photo.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, PhotoComponent, HomeComponent, FormComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  formSubmitted = false;
  firstName = '';
  lastName = '';
  establishment = '';
  studentNumber = '';
  photoUrl: string | ArrayBuffer | null = '';

  receiveData(data: any) {
    console.log("Données reçues:", data);
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.establishment = data.establishment;
    this.studentNumber = data.studentNumber;
    this.photoUrl = data.photoUrl;
    this.formSubmitted = true;
  }
}
