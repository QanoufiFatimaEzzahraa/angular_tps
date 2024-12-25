import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink,  RouterLinkActive, RouterOutlet } from '@angular/router';

import { EtablissementService } from '../etablissement.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Ajoutez CommonModule ici



@Component({
  selector: 'app-etablissement',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './etablissement.component.html',
  styleUrl: './etablissement.component.css'
})
export class EtablissementComponent {
  etablissement = {
    id: 0, // Initialisez avec une valeur par défaut (0 ou autre)
    nom: ''
  };

  message: string = '';

  constructor(
    private etablissementService: EtablissementService,
    private router: Router
  ) {}

  onSubmit(): void {
    // Vérifiez si l'ID est déjà utilisé
    const existingEtablissements = this.etablissementService.getEtablissements();
    const exists = existingEtablissements.some(e => e.id === this.etablissement.id);

    if (exists) {
      this.message = 'Un établissement avec cet ID existe déjà.';
      return;
    }

    // Ajouter l'établissement via le service
    this.etablissementService.ajouterEtablissement(this.etablissement);

    // Réinitialiser le formulaire
    this.etablissement = { id: 0, nom: '' }; // Réinitialisez avec une valeur par défaut

    // Afficher un message de succès
    this.message = 'Établissement ajouté avec succès !';

    // Optionnel : Naviguer vers une autre page après l'ajout
    // this.router.navigate(['/liste-etablissements']);
  }
}
