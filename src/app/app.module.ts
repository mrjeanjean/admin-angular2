import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldsRegisteryService } from "./fields/fields-registery.service";
import { FieldsDefautRegistery } from "./fields/fields-default.service";
import { DynamicFieldsDirective } from "./fields/dynamic-field.component"

import { AppComponent }   from './app.component';
import { TextFieldComponent } from "./fields/fields-types/text.field.component";
import { NumberFieldComponent } from "./fields/fields-types/number.field.component";
import { TextareaComponent } from "./fields/fields-types/textarea.field.component";
import { DynamicFormComponent } from "./forms/dynamic-form.component";
import { FormActionsComponent } from "./forms/form-actions.component";
import { FormService } from "./forms/form.service";

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
    providers: [FieldsRegisteryService, FieldsDefautRegistery, FormService],
})

export class AppModule {
}