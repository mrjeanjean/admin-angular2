import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { FormService } from "./form.service";

@Component({
    selector: 'dynamic-form',
    template: `<form [formGroup]="form" novalidate (ngSubmit)="save(form.value, form.valid)">,
        <div class="row">
        <p><strong>Form demo and validation</strong></p>
            <div class="alert" [ngClass]=" form.valid ? 'alert-success' : 'alert-danger'">Form valid: {{ form.valid ? 'true' : 'false' }}</div>
        </div>

        <ng-container
            dynamic-field
            *ngFor="let field of fields;"
            [config]="field.config"
            [group]="form">
        </ng-container>

        <div class="row">
            <p><br/><button type="submit" class="btn btn-info">Save page</button></p>
         </div>
    </form>`
})
export class DynamicFormComponent implements OnInit {
    public form:FormGroup;
    public submitted:boolean;

    private fields:any;

    constructor(private fb:FormBuilder, private formService:FormService) {}

    subcribeToFormChanges() {
        const formValueChanges$ = this.form.valueChanges;
        this.formService.formChanged.subscribe(fields => this.refreshForm(fields));
        this.formService.templateChanged.subscribe(fields => this.reloadTemplate(fields))
        //formValueChanges$.subscribe(x => console.log(x, this.form.valid));
    }

    ngOnInit() {
        this.form = this.fb.group({});
        this.subcribeToFormChanges();
    }

    save(value, isValid:boolean) {
        this.submitted = true;
        console.log("Is form valid ? : ", value, isValid);
    }

    refreshForm(fields:any):any {
        fields.forEach((el) => {
            this.form.addControl(el.name, this.fb.control(el.config['value'] || null, el.config.validation));
        });
        this.fields = fields;
    }

    reloadTemplate(fields:any):any {
        for(let control in this.form.controls){
            this.form.removeControl(control);
        }
        fields.forEach((el) => {
            this.form.addControl(el.name, this.fb.control(el.config['value'] || null, el.config.validation));
        });
        this.fields = fields;
    }
}