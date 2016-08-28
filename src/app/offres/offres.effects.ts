import { Injectable } from '@angular/core';
import { Effect, StateUpdates, toPayload } from '@ngrx/effects';

@Injectable()
export class Offreeffects {
  constructor(private appState$: StateUpdates<any>) {

  }
}
