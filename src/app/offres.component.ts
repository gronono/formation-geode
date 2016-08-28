import { Component } from '@angular/core';
import { Offre } from './offre';
import { DetailOffreComponent } from './detail-offre.component';
import {ListeOffresComponent} from "./liste-offres.component";

@Component({
  moduleId: module.id,
  selector: 'geode-offres',
  templateUrl: 'offres.component.html',
  directives: [
    ListeOffresComponent,
    DetailOffreComponent
  ]
})
export class OffresComponent {

  public offres: Offre[] = [{
    id: 1,
    titre: 'dev angular2',
    contenu: 'recherche dev ng2'
  }, {
    id: 2,
    titre: 'dev java',
    contenu: 'recherche dev java'
  }];

  public selectedOffre: Offre;

  onOffreSelected(offre: Offre) {
    console.log(`OffresComponent.onOffreSelected ${offre.id}`);
    this.selectedOffre = offre;
  }

  onAddFavoris(offre: Offre) {
    console.log(`Favoris ${offre.id}`);
  }
}
