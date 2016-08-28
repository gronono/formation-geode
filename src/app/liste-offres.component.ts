import {Component, Input, Output, EventEmitter, OnInit, OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import { Offre } from './offre';

@Component({
  moduleId: module.id,
  selector: 'geode-liste-offres',
  templateUrl: 'liste-offres.component.html',
  styleUrls: ['liste-offres.component.css'],
})
export class ListeOffresComponent implements OnInit, OnDestroy, OnChanges {
  @Input() offres: Offre[];
  @Input() selected: Offre;
  @Output() offreSelected = new EventEmitter<Offre>();


  onSelect(offre: Offre) {
    console.log(`ListeOffresComponent.onSelect(${offre.id})`);
    this.offreSelected.emit(offre);
  }

  isSelected(offre: Offre) {
    return offre === this.selected;
  }

  ngOnInit() {
    console.log('Init');
  }

  ngOnDestroy() {
    console.log('Destroy');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Changes', changes);
  }
}
