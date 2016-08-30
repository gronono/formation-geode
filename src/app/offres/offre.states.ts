import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Rx";
import {Offre} from "./offre.models";

@Injectable()
export class OffreStates {

  constructor(private store: Store<any>) {
  }

  getAllOffres(): Observable<Offre[]> {
    return this.store.select("offres") as Observable<Offre[]>;
  }

  getOffre(id): Observable<Offre> {
    return this.store.let((state$: Observable<any>) => state$
      .map<Offre[]>(state => state.offres)
      .flatMap(offres => Observable.from(offres))
      .filter(offre => offre.id == id)
    );
  }
}
