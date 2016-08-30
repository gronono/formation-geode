import {Component, ChangeDetectionStrategy, OnInit, OnDestroy} from '@angular/core';
import {Observable} from "rxjs/Rx";
import { Offre } from './offre.models';
import { DetailOffreComponent } from './detail-offre/detail-offre.component';
import {ListeOffresComponent} from "./liste-offres/liste-offres.component";
import {OffreFormComponent} from "./offre-form/offre-form.component";
import {OffreActions} from "./offre.actions";
import {OffreStates} from "./offre.states";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'geode-offres',
  templateUrl: 'offres.component.html',
  directives: [
    ListeOffresComponent,
    DetailOffreComponent,
    OffreFormComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OffresComponent implements OnInit, OnDestroy {

  public offres$: Observable<Offre[]>;
  public selectedOffre: Offre;

  private routeParams$;

  constructor(
    private offreStates: OffreStates,
    private offreActions: OffreActions,
    private router: Router,
    private route: ActivatedRoute) {

    this.offres$ = offreStates.getAllOffres();
  }

  ngOnInit() {
    this.offreActions.loadOffres();

    this.routeParams$ = this.route.params
      .map(params => params['id'])
      .switchMap(id => this.offreStates.getOffre(id))
      .subscribe(offre => this.selectedOffre = offre);
  }

  ngOnDestroy() {
    this.routeParams$.unsubscribe();
  }

  onOffreSelected(offre: Offre) {
    console.log("select", offre);
    this.router.navigate(['/offres', offre.id]);
  }

  onAddFavoris(offre: Offre) {
    this.offreActions.addOffreToFavoris(offre);
  }
}
