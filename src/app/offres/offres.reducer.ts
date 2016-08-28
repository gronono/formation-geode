import {Offre} from "./offre";
import {Action} from "@ngrx/store";

const offres: Offre[] = [{
  id: 1,
  titre: 'dev angular2',
  contenu: 'recherche dev ng2'
}, {
  id: 2,
  titre: 'dev java',
  contenu: 'recherche dev java'
}];

export const OFFRES_REDUCER = (state: Offre[] = offres, action: Action) => {
  switch (action.type) {

  }
  return state;
}
