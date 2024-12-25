import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  firstName = '';
  lastName = '';
  establishment = '';
  studentNumber = '';
  photoUrl: string | ArrayBuffer | null = '';

  @Output() formData = new EventEmitter<any>();

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.photoUrl = reader.result;
    };
    reader.readAsDataURL(file);
  }

  submitForm() {
    this.formData.emit({
      firstName: this.firstName,
      lastName: this.lastName,
      establishment: this.establishment,
      studentNumber: this.studentNumber,
      photoUrl: this.photoUrl
    });
  }
}
