import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink,  RouterLinkActive, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { EtudiantService } from '../etudiant.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-etudiant',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './etudiant.component.html',
  styleUrl: './etudiant.component.css'
})
export class EtudiantComponent {
  nom: string = '';
  prenom: string = '';
  matricule: string = '';
  email: string = '';
  etablissement: string = '';

  constructor(private etudiantService: EtudiantService, private router: Router) {}

  onSubmit(): void {
    const newEtudiant = {
      nom: this.nom,
      prenom: this.prenom,
      matricule: this.matricule,
      email: this.email,
      etablissement: this.etablissement
    };

    this.etudiantService.ajouterEtudiant(newEtudiant);

    this.nom = '';
    this.prenom = '';
    this.matricule = '';
    this.email = '';
    this.etablissement = '';

    this.router.navigate(['/liste-etudiants']);
  }
}
