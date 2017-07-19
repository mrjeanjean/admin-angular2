import { Injectable } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs/Subject.d';
import {FieldComponent} from "./field.component";

@Injectable()
export class FieldsRegisteryService {
    private fields:any = {};

    public register(name:string, field:any){
        this.fields[name] = field;
    }

    public getField(name:string):any{
        if(!this.fields.hasOwnProperty(name)){
            throw new Error("No field with the name : " + name + " registered");
        }
        return this.fields[name];
    }
}