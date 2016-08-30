import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Effect, StateUpdates, toPayload } from '@ngrx/effects';
import {OffreService} from "./offre.service";
import {OffreEvents} from "./offre.events";
import {Observable} from "rxjs/Rx";
import {Offre} from "./offre.models";

@Injectable()
export class OffreActions {
  constructor(private appState$: StateUpdates<any>,
              private store: Store<any>,
              private offreService: OffreService,
              private offreEvents: OffreEvents) {
  }

  //
  // Chargement des offres
  //
  static LOAD_OFFRES = 'LOAD_OFFRES';
  loadOffres() {
    this.store.dispatch({type: OffreActions.LOAD_OFFRES})
  }
  @Effect() loadOffre$ = this.appState$
    .whenAction(OffreActions.LOAD_OFFRES)
    .flatMap(() => this.offreService.findOffres())
    .map(offres => this.offreEvents.offresLoaded(offres));

  //
  // Ajout aux favoris
  //
  static ADD_OFFRE_TO_FAVORIS = 'ADD_OFFRE_TO_FAVORIS';
  addOffreToFavoris(offre) {
    this.store.dispatch({type: OffreActions.ADD_OFFRE_TO_FAVORIS, payload: offre});
  }
  @Effect() addOffreToFavoris$ = this.appState$
    .whenAction(OffreActions.ADD_OFFRE_TO_FAVORIS)
    .map<Offre>(toPayload)
    .map(payload => this.offreEvents.offreFavorisAdded(payload));
}
