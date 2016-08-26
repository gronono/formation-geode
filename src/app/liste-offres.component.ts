import { Component } from '@angular/core';
import { Offre } from './offre';

@Component({
  moduleId: module.id,
  selector: 'liste-offres',
  templateUrl: 'liste-offres.component.html',
  styleUrls: ['liste-offres.component.css'],
})
export class ListeOffresComponent {

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

  onSelect(offre: Offre) {
    console.log(`select ${offre.id} - ${offre.titre}`);
    this.selectedOffre = offre;
  }

  isSelected(offre: Offre) {
    return this.selectedOffre === offre;
  }

}
