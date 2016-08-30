
import { addProviders, async, inject } from '@angular/core/testing';
import {ListeOffresComponent} from "./liste-offres.component";
import {TestBed} from "@angular/core/testing/test_bed";

describe('ListeOffreComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListeOffresComponent]
    });
  });

  it('should emit event', inject([ListeOffresComponent], (component: ListeOffresComponent) => {
      const offre = {
        id: 1,
        titre: 'offre 1',
        contenu: 'description 1'
      };
      spyOn(component.offreSelected, 'emit');
      component.onSelect(offre);
      expect(component.offreSelected.emit).toHaveBeenCalledWith(offre);
    }));

});
