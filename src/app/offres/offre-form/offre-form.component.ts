import {Component} from '@angular/core';
import {FormGroup, FormBuilder, REACTIVE_FORM_DIRECTIVES, Validators} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'geode-offre-form',
  templateUrl: 'offre-form.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class OffreFormComponent {
  offreForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.offreForm = fb.group({
      titre: fb.control('', Validators.compose([Validators.required, Validators.minLength(3)])),
    });
  }

  add() {
    console.log("add", this.offreForm.valid);
  }
}
