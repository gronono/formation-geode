import {Offre} from "./offre.models";
import {Action} from "@ngrx/store";
import {Injectable} from "@angular/core";

export const OFFRES_REDUCER = (state: Offre[] = [], action: Action) => {
  switch (action.type) {
    case OffreEvents.OFFRES_LOADED: {
      let copy = action.payload.slice(0);
      return copy;
    }
  }

  return state;
};

@Injectable()
export class OffreEvents {
  static OFFRES_LOADED = 'OFFRES_LOADED';
  offresLoaded(offres: Offre[]): Action {
    return {type: OffreEvents.OFFRES_LOADED, payload: offres}
  }

  static OFFRE_FAVORIS_ADDED = 'OFFRE_FAVORIS_ADDED';
  offreFavorisAdded(offre: Offre): Action {
    return {type: OffreEvents.OFFRE_FAVORIS_ADDED, payload: offre};
  }
}
