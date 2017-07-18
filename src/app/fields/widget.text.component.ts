import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'form-button',
    template: `
    <div
      class="row"
      [formGroup]="parentGroup"
      >
      {{ config.label }}
      <input
        type="text"
        [formControlName]="config.name"
        class="form-control"
        />
    </div>
  `
})

export class WidgetTextComponent implements OnInit {
    ngOnInit():void {
        console.log(this.parentGroup)
    }
    @Input() config:any = {
        "label": "Mon label",
        "disabled": false
    };
    @Input() parentGroup: FormGroup;
}