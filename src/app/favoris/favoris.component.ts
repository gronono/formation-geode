import {Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Offre } from '../offres/index';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

@Component({
  moduleId: module.id,
  selector: 'geode-favoris',
  templateUrl: 'favoris.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavorisComponent {
  public favoris$: Observable<Offre[]>;

  constructor(store: Store<any>) {
    this.favoris$ = store.select('favoris') as Observable<Offre[]>;
  }
}
