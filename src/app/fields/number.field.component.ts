import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FieldComponent} from "./field.component";

@Component({
    template: `
    <div
      class="row"
      [formGroup]="parentGroup"
      >
      {{ config.label }}
      <input
        type="number"
        [formControlName]="config.name"
        class="form-control"
        />
    </div>
  `
})

export class NumberFieldComponent extends FieldComponent {
}