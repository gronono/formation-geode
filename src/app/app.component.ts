import {Component, ViewEncapsulation} from '@angular/core';
import { ListeOffresComponent } from './liste-offres.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ListeOffresComponent
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app works!';
}
