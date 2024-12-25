import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Ajoutez CommonModule ici
import { EtudiantService } from '../etudiant.service';



@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  etudiants = []; 

  constructor(private etudiantService: EtudiantService) {}

  ngOnInit(): void {
    this.etudiants = this.etudiantService.getEtudiants();
  }

}
