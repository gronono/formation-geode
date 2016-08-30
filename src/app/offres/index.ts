import {OffreActions} from "./offre.actions";
import {OffreStates} from "./offre.states";
import {OFFRES_REDUCER, OffreEvents} from "./offre.events";
import {OffreService} from "./offre.service";

export * from './offre.models';
export * from './offre.events';
export * from './offre.actions';
export * from './offres.component';
export * from './offre.service';
export * from './offre.states';

export const OFFRES_PROVIDERS = [OffreActions, OffreService, OffreEvents, OffreStates];


export const OFFRES_STORE = {
  offres: OFFRES_REDUCER
}
