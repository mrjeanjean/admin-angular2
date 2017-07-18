import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldsRegisteryService } from "./fields/fields-registery.services";
import { FieldsDefautRegistery } from "./fields/fields-default.service";
import { DynamicFieldsDirective } from "./fields/dynamic-field.component"

import { AppComponent }   from './app.component';
import { TextFieldComponent } from "./fields/text.field.component";
import { NumberFieldComponent } from "./fields/number.field.component";
import { TextareaComponent } from "./fields/textarea.field.component";
import { DynamicFormComponent } from "./fields/dynamic-form";
import {FormActionsComponent} from "./form-actions.component";
import {TemplatesService} from "./templates.services";

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, FormsModule],
    declarations: [
        AppComponent,
        FormActionsComponent,
        DynamicFormComponent,
        DynamicFieldsDirective,
        TextFieldComponent,
        NumberFieldComponent,
        TextareaComponent
    ],
    entryComponents: [
        TextFieldComponent,
        NumberFieldComponent,
        TextareaComponent
    ],
    bootstrap: [AppComponent],
    providers: [FieldsRegisteryService, FieldsDefautRegistery, TemplatesService],
})

export class AppModule {
}