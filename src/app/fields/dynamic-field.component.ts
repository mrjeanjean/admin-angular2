import { Directive, Input, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FieldsRegisteryService} from "./fields-registery.services";
import {FieldComponent} from "./field.component";
import {FieldConfig} from "./field-config.interface";
import {FieldsDefautRegistery} from "./fields-default.service";


@Directive({
    selector: '[dynamic-field]',
})
export class DynamicFieldsDirective implements OnInit {

    @Input() group: FormGroup;
    @Input() config:FieldConfig;

    constructor(
        private componentFactoryResolver:ComponentFactoryResolver,
        private container: ViewContainerRef,
        private fieldsRegistery:FieldsRegisteryService,
        private fieldsDefautRegistery:FieldsDefautRegistery
    ) { }

    ngOnInit():void {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.fieldsRegistery.getField(this.config.type));

        let component = this.container.createComponent(componentFactory);

        (<FieldComponent>component.instance).config = this.config;
        (<FieldComponent>component.instance).parentGroup = this.group;
    }

}