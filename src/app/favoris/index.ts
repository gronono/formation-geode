import {FAVORIS_REDUCER} from "./favoris.events";
import {FavorisComponent} from "./favoris.component";
export * from './favoris.actions';
export * from './favoris.events';
export * from './favoris.component';

export const FAVORIS_STORE = {
  favoris: FAVORIS_REDUCER
}

export const FAVORIS_ROUTES = [
  { path: 'favoris', component: FavorisComponent },
];
