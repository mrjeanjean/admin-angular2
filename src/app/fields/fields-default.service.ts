import {Injectable} from '@angular/core';
import {FieldsRegisteryService} from "./fields-registery.service";
import {TextFieldComponent} from "./fields-types/text.field.component";
import {NumberFieldComponent} from "./fields-types/number.field.component";
import {TextareaComponent} from "./fields-types/textarea.field.component";

@Injectable()
export class FieldsDefautRegistery{

    constructor(fieldsRegistery:FieldsRegisteryService){

        fieldsRegistery.register("text", TextFieldComponent);
        fieldsRegistery.register("number", NumberFieldComponent);
        fieldsRegistery.register("textarea", TextareaComponent);

    }

}