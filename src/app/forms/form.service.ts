import { Injectable, OnInit } from '@angular/core';
import { Validators } from '@angular/forms'
import {Subject} from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FormService {

    private fields:Object = {};

    private templates = {
        'page': {
            fields: [
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
        'page-1': {
            fields: [
                {
                    name: "title",
                    config: {
                        label: "Title",
                        name: "title",
                        type: "text",
                        value: "Page d'accueil de mon blog",
                        validation: [Validators.required]
                    }
                },
                {
                    name: "slug",
                    config: {
                        label: "URL slug",
                        name: "slug",
                        type: "text",
                        value: "page-accueil-blog"
                    }
                },
                {
                    name: "content",
                    config: {
                        label: "",
                        name: "content",
                        type: "textarea",
                        value: "Le contenu de mon blog. Passionnant et enrichissant pour tout ceux qui se passionnent pour les blogs. Avec du contenu par millier et des images cocaces."
                    }
                },
                {
                    name: "image",
                    config: {
                        label: "Image",
                        name: "image",
                        type: "text",
                        value: "mon-image-accueil.png"
                    }
                }
            ]
        },
        'contact': {
            fields: [
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
                        type: "text",
                        validation: [Validators.required]
                    }
                },
                {
                    name: "address",
                    config: {
                        label: "Address",
                        name: "address",
                        type: "textarea",
                        validation: [Validators.required]
                    }
                },
                {
                    name: "zip",
                    config: {
                        label: 'Zip',
                        name: 'zip',
                        type: 'text',
                        validation: [Validators.required]
                    }
                },
                {
                    name: "city",
                    config: {
                        label: 'City',
                        name: 'city',
                        type: 'text',
                        validation: [Validators.required]
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

    private _formChanged = new Subject();
    public formChanged = this._formChanged.asObservable();
    private _templateChanged = new Subject();
    public templateChanged = this._templateChanged.asObservable();

    public constructor(private http:HttpClient) {
    }

    public setForm(slug:string):void {
        if (slug == "") {
            this.fields = {
                "title": {
                    "name": "title",
                    "label": "Title",
                    "type": "text"
                }
            };

            this._formChanged.next(
                this.fields
            );
        } else {
            this.http.get("http://localhost/ng-silex-cms/web/api/page/" + slug).subscribe(data => {
                this.fields = data['fields'];
                this._formChanged.next(
                    this.fields
                );
            });
        }
    }

    public addField(field:any) {
        field.value = "";
        this.fields[field.name] = field.config;

        this._formChanged.next(
            this.fields
        );
    }

    public getTemplate() {
        return this.fields;
    }

    public loadTemplate(type:string):void {
        //this.fields = this.templates[type].fields.slice();
        this._templateChanged.next(
            this.fields
        )
    }

    public reset() {
        this.fields = {};
        this._templateChanged.next(
            this.fields
        )
    }

    sendPage(page:any):void {
        /*const data = Object.keys(this.fields).map(field=>{
            this.fields[field].value = page[field];
            return this.fields[field];
        });*/

        for(let field in this.fields){
            this.fields[field].value = page[field] || "";
        }

        //noinspection TypeScriptUnresolvedFunction
        this.http.post('http://localhost/ng-silex-cms/web/api/page/add', {"fields":{"name":"page", "fields":this.fields}}).subscribe(
            // Successful responses call the first callback.
            data => {
                console.log(data)
            },
            // Errors will call this callback instead:
            err => {
                console.log('Something went wrong!');
            }
        )
    }
}