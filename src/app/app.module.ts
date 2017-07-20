import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

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
import { KeysPipe } from "./pipes/keys.pipe";
import { RouterModule, Routes } from '@angular/router';
import {PagesComponent} from "./pages/pages.component";
import {PageComponent} from "./page/page.component";
import {TemplatesComponent} from "./templates/templates.component";

const appRoutes:Routes = [
    {path: 'pages', component: PagesComponent},
    {path: 'page/:slug', component: PageComponent},
    {path: 'template', component: TemplatesComponent},
    {
        path: '',
        redirectTo: '/pages',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        PagesComponent,
        TemplatesComponent,
        PageComponent,
        FormActionsComponent,
        DynamicFormComponent,
        DynamicFieldsDirective,
        TextFieldComponent,
        NumberFieldComponent,
        TextareaComponent,
        KeysPipe
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