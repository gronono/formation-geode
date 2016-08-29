import {Component} from '@angular/core';
import {FormGroup, FormBuilder, REACTIVE_FORM_DIRECTIVES, Validators, FormControl} from "@angular/forms";

@Component({
  moduleId: module.id,
  selector: 'geode-offre-form',
  templateUrl: 'offre-form.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES]
})
export class OffreFormComponent {
  static startWithRecherche(control: FormControl) {
    if (!control.value.startsWith("Recherche")) {
      return {dontStartWithRecherche: true};
    }
  }

  offreForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.offreForm = fb.group({
      titre: fb.control('', Validators.compose([Validators.required, Validators.minLength(3), OffreFormComponent.startWithRecherche])),
    });
  }

  add() {
    console.log("add", this.offreForm.valid);
  }
}
