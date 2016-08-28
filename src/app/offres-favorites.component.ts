import {Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Offre } from './offre';

@Component({
  moduleId: module.id,
  selector: 'geode-offres-favorites',
  templateUrl: 'offres-favorites.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OffresFavoritesComponent {
  @Input() offres: Offre[];
}
