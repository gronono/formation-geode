import {Component, ViewEncapsulation} from '@angular/core';
import { ListeOffresComponent } from './liste-offres.component';
import {OffresComponent} from "./offres.component";
import {OffresFavoritesComponent} from "./offres-favorites.component";
import {Offre } from './offre';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

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

  public favoris$: Observable<Offre[]>;

  constructor(store: Store<any>) {
    this.favoris$ = store.select('favoris') as Observable<Offre[]>;
  }
}
