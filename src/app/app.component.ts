import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {Offre } from './offres/index';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Rx";

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'app works!';
}
