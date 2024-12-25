import { Component, OnInit  } from '@angular/core';
import { EtudiantService } from '../etudiant.service';
import { CommonModule } from '@angular/common';  // Ajoutez CommonModule ici


@Component({
  selector: 'app-etudiant-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etudiant-list.component.html',
  styleUrl: './etudiant-list.component.css'
})
export class EtudiantListComponent implements OnInit {
  email: string = 'qanoufi@gmail.com';
  etudiants: any[] = [];

  constructor(private etudiantService: EtudiantService) {}

  ngOnInit(): void {
    this.etudiants = this.etudiantService.getEtudiants();
  }
}
