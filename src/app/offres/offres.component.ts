import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Offre } from './offre';
import { DetailOffreComponent } from './detail-offre/detail-offre.component';
import {ListeOffresComponent} from "./liste-offres/liste-offres.component";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";

@Component({
  moduleId: module.id,
  selector: 'geode-offres',
  templateUrl: 'offres.component.html',
  directives: [
    ListeOffresComponent,
    DetailOffreComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OffresComponent {

  public offres$: Observable<Offre[]>;

  constructor(private store: Store<any>) {
    this.offres$ = store.select('offres') as Observable<Offre[]>;
  }

  public selectedOffre: Offre;

  onOffreSelected(offre: Offre) {
    console.log(`OffresComponent.onOffreSelected ${offre.id}`);
    this.selectedOffre = offre;
  }

  onAddFavoris(offre: Offre) {
    console.log(`Favoris ${offre.id}`);
    this.store.dispatch({type: 'ADD_FAVORIS', payload: offre});
  }
}
