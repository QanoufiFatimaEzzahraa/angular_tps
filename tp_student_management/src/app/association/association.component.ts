import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../etudiant.service';
import { EtablissementService } from '../etablissement.service';
import { AssociationService } from '../association.service';
import { RouterLink,  RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Ajoutez CommonModule ici

@Component({
  selector: 'app-association',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './association.component.html',
  styleUrl: './association.component.css'
})
export class AssociationComponent implements OnInit {
  etudiants: { id: number; nom: string; prenom: string; matricule: string; email: string; etablissementId?: number }[] = []; // Typage explicite
  etablissements: { id: number; nom: string }[] = []; // Typage explicite
  selectedEtudiantId?: number;
  selectedEtablissementId?: number;

  constructor(
    private etudiantService: EtudiantService,
    private etablissementService: EtablissementService,
    private associationService: AssociationService
  ) {}

  ngOnInit(): void {
    // Charger les étudiants et établissements au démarrage du composant
    this.etudiants = this.etudiantService.getEtudiants();
    this.etablissements = this.etablissementService.getEtablissements();
  }

  onSubmit(): void {
    if (this.selectedEtudiantId && this.selectedEtablissementId) {
      this.associationService.associerEtudiantAEtablissement(this.selectedEtudiantId, this.selectedEtablissementId);
      alert('Association réussie !');
    } else {
      alert('Veuillez sélectionner un étudiant et un établissement.');
    }
  }
}
