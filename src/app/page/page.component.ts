import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    template:`
        <div class="row">
            <div class="col-md-12">
                <dynamic-form [slug]="slug"></dynamic-form>
            </div>
        </div>
    `
})
export class PageComponent implements OnInit{
    slug:string;

    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => this.slug = params['slug']);
    }
}