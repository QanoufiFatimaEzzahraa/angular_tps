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
  students: any[] = [];
  formSubmitted = false;
  newStudent = { firstName: '', lastName: '', establishment: '', studentNumber: '', photoUrl: '' };

  addStudent() {
    console.log('Ajout d\'un étudiant:', this.newStudent); 
    this.students.push({ ...this.newStudent });
    this.newStudent = { firstName: '', lastName: '', establishment: '', studentNumber: '', photoUrl: '' };
  }

  showStudentCards() {
    this.formSubmitted = true;
  }
}
