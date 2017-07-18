import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Prop } from "./prop.interface";

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

    public addProperty(property:Prop, name:string) {
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