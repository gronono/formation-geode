import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Offre} from './offre.models';

@Injectable()
export class OffreService {

   offres: Offre[] = [{
  id: 1,
  titre: 'dev angular2',
  contenu: 'recherche dev ng2'
}, {
  id: 2,
  titre: 'dev java',
  contenu: 'recherche dev java'
}];

  findOffres(): Observable<Offre[]> {
    return Observable.of(this.offres);
  }
}
