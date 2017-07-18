import {Injectable} from '@angular/core';
import {FieldsRegisteryService} from "./fields-registery.services";
import {TextFieldComponent} from "./text.field.component";
import {NumberFieldComponent} from "./number.field.component";
import {TextareaComponent} from "./textarea.field.component";

@Injectable()
export class FieldsDefautRegistery{

    constructor(fieldsRegistery:FieldsRegisteryService){
        fieldsRegistery.register("text", TextFieldComponent);
        fieldsRegistery.register("number", NumberFieldComponent);
        fieldsRegistery.register("textarea", TextareaComponent);
    }

}