import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EtudiantComponent} from  './etudiant/etudiant.component';
import { EtablissementComponent} from  './etablissement/etablissement.component';
import { AssociationComponent} from  './association/association.component';
import { EtudiantListComponent } from  './etudiant-list/etudiant-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, EtudiantComponent, EtablissementComponent, AssociationComponent, EtudiantListComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router) {}

  title = 'tp5';

  isRouteActive(route: string): boolean {
    return this.router.url.includes(route);
  }
}
