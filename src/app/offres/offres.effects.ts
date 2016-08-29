import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Effect, StateUpdates, toPayload } from '@ngrx/effects';

@Injectable()
export class Offreeffects {
  constructor(private appState$: StateUpdates<any>, private store: Store<any>) {

  }
}
