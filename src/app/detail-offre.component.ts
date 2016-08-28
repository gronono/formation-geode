import {Component, Input} from '@angular/core';
import { Offre } from './offre';

@Component({
  moduleId: module.id,
  selector: 'geode-detail-offre',
  templateUrl: 'detail-offre.component.html',

})
export class DetailOffreComponent {

  @Input() offre: Offre;

}
