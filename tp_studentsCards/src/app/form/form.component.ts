import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  @Input() formData: any;
  @Output() formDataChange = new EventEmitter<any>();
  @Output() submit = new EventEmitter<void>();

  onSubmit() {
    this.formDataChange.emit(this.formData);  
  }

  onPhotoSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.formData.photoUrl = reader.result;
        this.formDataChange.emit(this.formData);
      };
      reader.readAsDataURL(file);
    }
  }

  onInputChange() {
    this.formDataChange.emit(this.formData);
  }
}
