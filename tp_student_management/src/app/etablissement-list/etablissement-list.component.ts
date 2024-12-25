import { Component, OnInit } from '@angular/core';
import { EtablissementService } from '../etablissement.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-etablissement-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './etablissement-list.component.html',
  styleUrl: './etablissement-list.component.css'
})
export class EtablissementListComponent implements OnInit {
  etablissements: { id: number; nom: string }[] = []; // Liste des établissements

  constructor(private etablissementService: EtablissementService) {}

  ngOnInit(): void {
    this.etablissements = this.etablissementService.getEtablissements();
  }
}
