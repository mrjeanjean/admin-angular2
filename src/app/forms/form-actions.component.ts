import { Component, OnInit } from '@angular/core';
import {FormService} from "./form.service";
import {Validators} from '@angular/forms';

@Component({
    selector:'form-actions',
    templateUrl: "./form-actions.component.html",
})
export class FormActionsComponent implements OnInit{

    constructor(private formService:FormService){}
    ngOnInit():void {}

    addField(type:string){
        let field_name = type + "_" + Math.floor(Math.random() * 99999);
        this.formService.addField({
            name: field_name,
            config: {
                label: "Label of " + field_name,
                disabled: false,
                name: field_name,
                //validation: [Validators.required],
                type: type
            }});
    }

    loadTemplate(type:string){
        this.formService.loadTemplate(type);
    }

    reset(){
        this.formService.reset();
    }
}