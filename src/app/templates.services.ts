import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {Field} from "./fields/field.interface";

@Injectable()
export class TemplatesService {
    private properties = {
            "email": {
                "type": "string",
                "description": "email",
            },
    };

    private _templateChanged = new Subject();
    public categoriesChanged = this._templateChanged.asObservable();

    public addField(property:Field, name:string) {
        this.properties[name] = property;
        this._templateChanged.next(
            this.getTemplate()
        );
    }

    public getTemplate(){
        return {
            properties :this.properties
        };
    }
}