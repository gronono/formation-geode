import { Injectable } from '@angular/core';
import { Effect, StateUpdates, toPayload } from '@ngrx/effects';

@Injectable()
export class FavorisEffects {
  constructor(private appState$: StateUpdates<any>) {

  }

  @Effect() addFavoris$ = this.appState$
    .whenAction('ADD_FAVORIS')
    .map<string>(toPayload)
    .map(payload => {
      return {type: 'FAVORIS_ADDED', payload: payload}
    });
}
