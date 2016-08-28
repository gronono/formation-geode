import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import { Offre } from '../offre';

@Component({
  moduleId: module.id,
  selector: 'geode-detail-offre',
  templateUrl: 'detail-offre.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailOffreComponent {

  @Input() offre: Offre;
  @Output() addFavoris = new EventEmitter<Offre>();

  onAddFavoris() {
    this.addFavoris.emit(this.offre);
  }
}
