import {Component, Input } from '@angular/core';
import { Offre } from './offre';

@Component({
  moduleId: module.id,
  selector: 'geode-offres-favorites',
  templateUrl: 'offres-favorites.component.html',
})
export class OffresFavoritesComponent {
  @Input() offres: Offre[];
}
