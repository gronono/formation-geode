import {Offre} from "./offre.models";
import {OFFRES_REDUCER, OffreEvents} from "./offre.events";

describe('OFFRES_REDUCER', () => {
  let initState: Offre[];

  // Reset de l'état initial
  beforeEach(() => {
      initState = [{
        id: 1,
        titre: 'offre 1',
        contenu: 'offre 1'
      },{
        id: 2,
        titre: 'offre 2',
        contenu: 'offre 2'
      }];
  });

  it('should not handle unknow event', () => {
    const newState = OFFRES_REDUCER(initState, {type: 'toto'});
    expect(newState).toEqual(initState);
  });

  it('should replace previous state on load', () => {
    const newState = OFFRES_REDUCER(initState, {
      type: OffreEvents.OFFRES_LOADED,
      payload: [{
        id: 4,
        titre: 'offre 4',
        contenu: 'offre 4'
      }]
    });
    expect(newState).not.toEqual(initState);
    expect(newState.length).toBe(1);
    expect(newState[0].id).toBe(4);
  });
});
