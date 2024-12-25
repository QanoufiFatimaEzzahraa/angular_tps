import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  @Input() firstName = '';
  @Input() lastName = '';
  @Input() establishment = '';
  @Input() studentNumber = '';

}
