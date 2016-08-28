import {Component, ViewEncapsulation} from '@angular/core';
import { ListeOffresComponent } from './liste-offres.component';
import {OffresComponent} from "./offres.component";
import {OffresFavoritesComponent} from "./offres-favorites.component";
import {Offre } from './offre';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    OffresComponent,
    OffresFavoritesComponent
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';

  public favoris: Offre[] = [{
    id: 10,
    titre: 'Favoris 1',
    contenu: 'Mon offre favorite 1'
  }, {
    id: 20,
    titre: 'Favoris 2',
    contenu: 'Mon offre favorite 2'
  }];
}
