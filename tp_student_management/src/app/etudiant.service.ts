import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private etudiants: any[] = []; // Liste des étudiants en mémoire

  constructor() {}

  // Ajouter un étudiant à la liste
  ajouterEtudiant(etudiant: any): void {
    this.etudiants.push(etudiant);
  }

  // Récupérer la liste des étudiants
  getEtudiants(): any[] {
    return this.etudiants;
  }
}
