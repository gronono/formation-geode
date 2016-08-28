import {Offre} from "../offres/offre";
import {Action} from "@ngrx/store";

const favoris: Offre[] = [{
  id: 10,
  titre: 'Favoris 1',
  contenu: 'Mon offre favorite 1'
}, {
  id: 20,
  titre: 'Favoris 2',
  contenu: 'Mon offre favorite 2'
}];

export const FAVORIS_REDUCER = (state: Offre[] = favoris, action: Action) => {
  switch (action.type) {
    case 'FAVORIS_ADDED': {
      let copy = state.slice(0);
      copy.push(action.payload);
      return copy;
    }
  }
  return state;
}
