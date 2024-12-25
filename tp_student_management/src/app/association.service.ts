import { Injectable } from '@angular/core';
import { EtudiantService } from './etudiant.service'; // Assurez-vous que le chemin est correct
import { EtablissementService } from './etablissement.service'; // Assurez-vous que le chemin est correct

@Injectable({
  providedIn: 'root'
})
export class AssociationService {
  private associations: { etudiantId: number; etablissementId: number }[] = []; // Liste des associations

  constructor(
    private etudiantService: EtudiantService,
    private etablissementService: EtablissementService
  ) {}

  // Associer un étudiant à un établissement
  associerEtudiantAEtablissement(etudiantId: number, etablissementId: number): void {
    this.associations.push({ etudiantId, etablissementId });
    console.log(`Étudiant ID ${etudiantId} associé à Établissement ID ${etablissementId}`);
    // Vous pouvez également mettre à jour l'étudiant ici si nécessaire
    const student = this.etudiantService.getEtudiants().find(e => e.id === etudiantId);
    if (student) {
      student.etablissementId = etablissementId;
    }
  }

   // Récupérer l'établissement associé à un étudiant
   getEtablissementParEtudiant(etudiantId: number): string {
     const association = this.associations.find(a => a.etudiantId === etudiantId);
     if (association) {
       const etablissement = this.etablissementService.getEtablissements().find(e => e.id === association.etablissementId);
       return etablissement ? etablissement.nom : 'Inconnu';
     }
     return 'Aucune association';
   }
}
