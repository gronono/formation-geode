import {Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Offre } from '../offres/index';

@Component({
  moduleId: module.id,
  selector: 'geode-favoris',
  templateUrl: 'favoris.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavorisComponent {
  @Input() offres: Offre[];
}
