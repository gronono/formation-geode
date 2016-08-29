import {Component, ChangeDetectionStrategy, OnInit} from '@angular/core';
import { Offre } from './offre.models';
import { DetailOffreComponent } from './detail-offre/detail-offre.component';
import {ListeOffresComponent} from "./liste-offres/liste-offres.component";
import {Observable} from "rxjs/Rx";
import {OffreActions} from "./offre.actions";
import {OffreStates} from "./offre.states";

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
export class OffresComponent implements OnInit {

  public offres$: Observable<Offre[]>;
  public selectedOffre: Offre;

  constructor(private offreStates: OffreStates, private offreActions: OffreActions) {
    this.offres$ = offreStates.getAllOffres();
  }

  ngOnInit() {
    this.offreActions.loadOffres();
  }

  onOffreSelected(offre: Offre) {
    console.log(`OffresComponent.onOffreSelected ${offre.id}`);
    this.selectedOffre = offre;
  }

  onAddFavoris(offre: Offre) {
    console.log(`Favoris ${offre.id}`);
    this.offreActions.addOffreToFavoris(offre);
  }
}
