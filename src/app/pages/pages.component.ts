import { Component, OnInit } from '@angular/core';
import { PagesService } from "./pages.service";

@Component({
    template:`
        <h2>Les pages du sites</h2>
        <table class="table table-striped">
            <tr *ngFor="let page of pages | keys">
                <td>{{pages[page].fields.title.value }}</td>
                <td><a routerLink="/page/{{pages[page].name }}" routerLinkActive="active">Voir</a></td>
                <td>Supprimer</td>
            </tr>
        </table>


    `,
    providers: [PagesService]
})
export class PagesComponent implements OnInit{
    private pages:any = {
    };

    constructor(private pagesService:PagesService){

    }

    ngOnInit():void {
        this.pagesService.getAll();
        this.pagesService.pageChanged.subscribe(pages => {
            this.pages = pages
            console.log('Changed !!!', this.pages)
        });
    }
}