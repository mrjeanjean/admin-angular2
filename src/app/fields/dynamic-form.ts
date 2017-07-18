import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import {TemplatesService} from "../templates.services";

@Component({
    selector: 'dynamic-form',
    template: `<form [formGroup]="myForm" novalidate (ngSubmit)="save(myForm.value, myForm.valid)">,
        <div class="row">
            <div class="alert" [ngClass]=" myForm.valid ? 'alert-success' : 'alert-danger'">Form valid: {{ myForm.valid ? 'true' : 'false' }}</div>
        </div>

        <ng-container
            dynamic-field
            *ngFor="let field of fields;"
            [config]="field.config"
            [group]="myForm">
        </ng-container>

        <div class="row">
            <p><br/><button type="submit" class="btn btn-info">Save page</button></p>
         </div>
    </form>`
})
export class DynamicFormComponent implements OnInit {
    public myForm:FormGroup; // our model driven form
    public submitted:boolean; // keep track on whether form is submitted

    private fields:any;

    constructor(private fb:FormBuilder, private templateService:TemplatesService) {}

    subcribeToFormChanges() {
        const myFormValueChanges$ = this.myForm.valueChanges;

        this.templateService.templateChanged.subscribe(x => this.refreshForm(x))
        myFormValueChanges$.subscribe(x => console.log("Je change !!", x, this.myForm.valid));
    }

    ngOnInit() {
        this.myForm = this.fb.group({});
        this.subcribeToFormChanges();
    }

    save(value, isValid:boolean) {
        this.submitted = true;
        console.log("Is form valid ? : ", value, isValid);
    }

    addField() {

    }

    public refreshForm(fields:any):any {
        fields.forEach((el) => {
            this.myForm.addControl(el.name, this.fb.control(el.config['value'] || null, el.config.validation));
        });
        this.fields = fields;
    }
}