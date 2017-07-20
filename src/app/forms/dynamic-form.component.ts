import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { FormService } from "./form.service";
import {FieldComponent} from "../fields/field.component";

@Component({
    selector: 'dynamic-form',
    template: `<form [formGroup]="form" novalidate (ngSubmit)="save(form.value, form.valid)">,
        <div class="row">
        <h3 *ngIf="fields"><strong>{{fields.title.value}}</strong></h3>
            <div class="alert" [ngClass]=" form.valid ? 'alert-success' : 'alert-danger'">Form valid: {{ form.valid ? 'true' : 'false' }}</div>
        </div>

        <ng-container
            dynamic-field
            *ngFor="let field of fields|keys"
            [config]="fields[field]"
            [group]="form">
        </ng-container>

        <div class="row">
            <p><br/><button type="submit" class="btn btn-info">Save page</button></p>
         </div>

    </form>`
})

export class DynamicFormComponent implements OnInit {
    @Input() slug:string = "";
    public form:FormGroup;
    public submitted:boolean;

    private fields:any;

    constructor(private fb:FormBuilder, private formService:FormService) {
    }

    subcribeToFormChanges() {
        const formValueChanges$ = this.form.valueChanges;
        this.formService.formChanged.subscribe(fields => this.refreshForm(fields));
        this.formService.templateChanged.subscribe(fields => this.reloadTemplate(fields))
        //formValueChanges$.subscribe(x => console.log(x, this.form.valid));
    }

    ngOnInit() {
        this.form = this.fb.group({});
        this.subcribeToFormChanges();
        this.formService.setForm(this.slug);
    }

    save(value, isValid:boolean) {
        this.submitted = true;

        if(isValid){
            this.formService.sendPage(value);
        }
        console.log("Is form valid ? : ", value, isValid);
    }

    refreshForm(fields:any):any {
        for (let field in fields) {
            // TODO: Add validation
            this.form.addControl(field, this.fb.control(fields[field].value || null));
        }
        this.fields = fields;
    }

    reloadTemplate(fields:any):any {

        for (let control in this.form.controls) {
            this.form.removeControl(control);
        }

        for (let field in fields) {
            // TODO: Add validation
            this.form.addControl(fields[field].name, this.fb.control(fields[field].value || null));
        }

        this.fields = fields;
    }
}