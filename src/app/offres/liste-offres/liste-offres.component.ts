import {
  Component, Input, Output, EventEmitter, OnInit, OnChanges, OnDestroy, SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import { Offre } from '../index';

@Component({
  moduleId: module.id,
  selector: 'geode-liste-offres',
  templateUrl: 'liste-offres.component.html',
  styleUrls: ['liste-offres.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListeOffresComponent {
  @Input() offres: Offre[];
  @Input() selected: Offre;
  @Output() offreSelected = new EventEmitter<Offre>();

  onSelect(offre: Offre) {
    this.offreSelected.emit(offre);
  }

  isSelected(offre: Offre) {
    return offre === this.selected;
  }

}
