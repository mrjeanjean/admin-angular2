import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TemplatesService {
    private fields = [];

    private templates = {
        'page':{
            fields:[
                {
                    name: "title",
                    config: {
                        label: "Title",
                        name: "title",
                        type: "text"
                    }
                },
                {
                    name: "slug",
                    config: {
                        label: "URL slug",
                        name: "slug",
                        type: "text"
                    }
                },
                {
                    name: "content",
                    config: {
                        label: "",
                        name: "content",
                        type: "textarea"
                    }
                },
                {
                    name: "image",
                    config: {
                        label: 'Image',
                        name: 'image',
                        type: 'text'
                    }
                }
            ]
        },
        'contact':{
            fields:[
                {
                    name: "firstname",
                    config: {
                        label: "First Name",
                        name: "firstname",
                        type: "text"
                    }
                },
                {
                    name: "lastname",
                    config: {
                        label: "Last Name",
                        name: "lastname",
                        type: "text"
                    }
                },
                {
                    name: "address",
                    config: {
                        label: "Address",
                        name: "address",
                        type: "textarea"
                    }
                },
                {
                    name: "zip",
                    config: {
                        label: 'Zip',
                        name: 'zip',
                        type: 'text'
                    }
                },
                {
                    name: "city",
                    config: {
                        label: 'City',
                        name: 'city',
                        type: 'text'
                    }
                },
                {
                    name: "country",
                    config: {
                        label: 'Country',
                        name: 'country',
                        type: 'text'
                    }
                }
            ]
        }
    }

    private _templateChanged = new Subject();
    public templateChanged = this._templateChanged.asObservable();

    public addField(field:any) {
        this.fields.push(field);
        this._templateChanged.next(
            this.fields
        );
    }

    public getTemplate() {
        return this.fields;
    }

    public loadTemplate(type:string):void {
        this.fields = this.templates[type].fields;
        this._templateChanged.next(
            this.fields
        )
    }

    public reset(){
        this.fields = [];
        this._templateChanged.next(
            this.fields
        )
    }
}