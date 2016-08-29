import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Effect, StateUpdates, toPayload } from '@ngrx/effects';
import {FavorisReducers} from "./favoris.reducer";
import {Offre} from "../offres/index";

@Injectable()
export class FavorisEffects {
  constructor(private appState$: StateUpdates<any>, private store: Store<any>) {
  }

  static ADD_FAVORIS = 'ADD_FAVORIS';
  addFavoris(offre) {
    this.store.dispatch({type: FavorisEffects.ADD_FAVORIS, payload: offre});
  }
  @Effect() addFavoris$ = this.appState$
    .whenAction(FavorisEffects.ADD_FAVORIS)
    .map<Offre>(toPayload)
    .map(payload => FavorisReducers.favorisAdded(payload));
}
