import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';
import {Offre} from '../index';
import {FormGroup} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'geode-offre-form',
  templateUrl: 'offre-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OffreFormComponent {

  offre = {
  };

  add(form: FormGroup) {
    console.log("add", form, this.offre);
  }
}
