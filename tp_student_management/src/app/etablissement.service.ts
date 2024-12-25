import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtablissementService {
  private etablissements: { id: number; nom: string }[] = []; // Liste des établissements

  constructor() {}

  // Ajouter un établissement à la liste
  ajouterEtablissement(etablissement: { id: number; nom: string }): void {
    this.etablissements.push(etablissement);
  }

  // Récupérer la liste des établissements
  getEtablissements(): { id: number; nom: string }[] {
    return this.etablissements;
  }
}
