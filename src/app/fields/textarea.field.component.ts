import {Component} from '@angular/core';
import {FieldComponent} from "./field.component";

@Component({
    template:`<div
      class="row"
      [formGroup]="parentGroup"
      >
      {{ config.label }}
      <textarea
      rows="10"
        [formControlName]="config.name"
        class="form-control"
        ></textarea>
    </div>`
})
export class TextareaComponent extends FieldComponent{

}