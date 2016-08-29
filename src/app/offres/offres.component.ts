import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Offre } from './offre.model';
import { DetailOffreComponent } from './detail-offre/detail-offre.component';
import {ListeOffresComponent} from "./liste-offres/liste-offres.component";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {FavorisEffects} from "../favoris/favoris.effects";

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

  constructor(private store: Store<any>, private favorisEffects: FavorisEffects) {
    this.offres$ = store.select('offres') as Observable<Offre[]>;
  }

  public selectedOffre: Offre;

  onOffreSelected(offre: Offre) {
    console.log(`OffresComponent.onOffreSelected ${offre.id}`);
    this.selectedOffre = offre;
  }

  onAddFavoris(offre: Offre) {
    console.log(`Favoris ${offre.id}`);
    this.favorisEffects.addFavoris(offre);
  }
}
