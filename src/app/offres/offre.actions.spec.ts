import { MOCK_EFFECTS_PROVIDERS, MockStateUpdates } from '@ngrx/effects/testing';
import {OffreActions} from "./offre.actions";
import {TestBed, inject} from "@angular/core/testing/test_bed";
import {OffreEvents} from "./offre.events";
import {async} from "@angular/core/testing/async";
import {Store, StoreModule} from "@ngrx/store";
import {OffreService} from "./offre.service";
import {Offre} from "./offre.models";
import {OFFRES_STORE} from "./index";
import {OffreStates} from "./offre.states";

class FakeStore {

}

describe('Offre Actions', function() {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OffreService,
        OffreActions,
        OffreEvents,
        MOCK_EFFECTS_PROVIDERS,
        StoreModule.provideStore(OFFRES_STORE).providers,
        OffreStates
      ]
    });
  });

  it('should load offres', async(inject([OffreActions, MockStateUpdates], (offreActions: OffreActions, updates: MockStateUpdates) => {
    const actualEvents = [];

    offreActions.loadOffre$.subscribe(
      event => actualEvents.push(event),
      error => fail("ERROR dans l'effect"),
      () => {
        expect(actualEvents.length).toBe(1);
        expect(actualEvents[0].type).toBe(OffreEvents.OFFRES_LOADED);
      }
    );

    updates.send([], {type: OffreActions.LOAD_OFFRES});
    updates.complete();
  })));

  it('should load offres 2', async(inject([OffreActions, OffreStates], (offreActions: OffreActions, offresState: OffreStates) => {
    const offres = [];
    offresState.getAllOffres().subscribe(offre => offres.push(...offre));

    offreActions.loadOffres();
    expect(offres.length).toBe(2);
  })));
});
