import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {WidgetTextComponent} from "./fields/widget.text.component";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    entryComponents: [WidgetTextComponent],
    template: `<form [formGroup]="myForm" novalidate (ngSubmit)="save(myForm.value, myForm.valid)" class="container">,



        <div class="row">
            <div class="alert " [ngClass]=" myForm.valid ? 'alert-success' : 'alert-danger'">Form valid: {{ myForm.valid ? 'true' : 'false' }}</div>
        </div>


        <div class="row">
            <p><br/><button type="button" class="btn btn-info" (click)="addField()">Add field</button></p>
         </div>

        <ng-container
            dynamic-field
            *ngFor="let field of fields;"
            [config]="field.config"
            [group]="myForm">
        </ng-container>

        <div class="row">
            <p><br/><button type="submit" class="btn btn-info">Enregistrer page</button></p>
         </div>


</form>`,
})
export class AppComponent implements OnInit {
    public myForm:FormGroup; // our model driven form
    public submitted:boolean; // keep track on whether form is submitted
    public events:any[] = []; // use later to display form changes

    fields = [
        {
            name: "text1",
            config: {
                "label": "Value 1",
                "disabled": false,
                name: "text1",
                validation: []
            }

        },
        {
            name: "text2",
            config: {
                "label": "Value 2",
                "disabled": false,
                name: "text2",
                validation: [],
                value: "Déjà rempli..."
            }

        },
        {
            name: "text3",
            config: {
                "label": "Value 3",
                "disabled": false,
                name: "text3",
                validation: [Validators.required, Validators.max(5)]
            }

        }

    ];

    constructor(private fb:FormBuilder) {}

    subcribeToFormChanges() {
        // initialize stream
        const myFormValueChanges$ = this.myForm.valueChanges;

        // subscribe to the stream
        myFormValueChanges$.subscribe(x => console.log("Je change !!", x, this.myForm.valid));
    }

    ngOnInit() {

        // the long way
        this.myForm = this.fb.group({
            "name": [5, Validators.required]
        });

        this.fields.forEach((el) => {
            this.myForm.addControl(el.name, this.fb.control(el.config['value'] || null, el.config.validation));
        });


        this.subcribeToFormChanges();
    }

    save(value, isValid:boolean) {
        this.submitted = true; // set form submit to true

        // check if model is valid
        // if valid, call API to save customer
        console.log("IS Valid ? : ", value, isValid);
    }

    addField() {
        let field_name = "text_" + Math.floor(Math.random() * 99999);
        this.myForm.addControl(field_name, this.fb.control(null, Validators.required));
        this.fields.push({
            name: field_name,
            config: {
                "label": "Value New",
                "disabled": false,
                name: field_name,
                validation: [],
                value: 5
            }
        })
    }
}