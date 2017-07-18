import { Directive, Input, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {WidgetTextComponent} from "./widget.text.component";

@Directive({
    selector: '[dynamic-field]',
})

export class DynamicFieldsDirective implements OnInit {

    @Input() group: FormGroup;

    @Input() config:any = {
        "label": "Mon label",
        "disabled": false
    };

    constructor(
        private componentFactoryResolver:ComponentFactoryResolver,
        private container: ViewContainerRef
    ) { }

    ngOnInit():void {
        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(WidgetTextComponent);

        let component = this.container.createComponent(componentFactory);

        component.instance.config = this.config;
        component.instance.parentGroup = this.group;

    }

}