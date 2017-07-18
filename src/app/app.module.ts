import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetTextComponent } from './fields/widget.text.component'
import { DynamicFieldsDirective } from "./fields/dynamic-field.component"

import { AppComponent }   from './app.component';

@NgModule({
    imports:      [ BrowserModule, ReactiveFormsModule, FormsModule ],
    declarations: [ AppComponent, WidgetTextComponent, DynamicFieldsDirective ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }