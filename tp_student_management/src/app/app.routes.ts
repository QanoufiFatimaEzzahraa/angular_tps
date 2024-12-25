import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EtablissementComponent } from './etablissement/etablissement.component';
import { AssociationComponent} from  './association/association.component';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { EtablissementListComponent } from './etablissement-list/etablissement-list.component';
import { ListComponent } from './list/list.component';




export const routes: Routes = [
  {
    path:'etudiants', component: EtudiantComponent
  },
  {
    path:'etablissements', component: EtablissementComponent
  },

  {
    path:'association', component: AssociationComponent
  },

  { path: 'liste-etudiants', component: EtudiantListComponent },

  { path: 'liste-etablissement', component: EtablissementListComponent },
  { path: 'list', component: ListComponent },




];
