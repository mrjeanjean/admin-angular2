import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs/Subject";

@Injectable()
export class PagesService {

    private _pagesChanged = new Subject();
    public pageChanged = this._pagesChanged.asObservable();
    private pages;

    public constructor(private http:HttpClient) {
    }

    public getAll() {
        this.http.get("http://localhost/ng-silex-cms/web/api/pages").subscribe(pages=>{
            this.pages = pages;
            this._pagesChanged.next(this.pages);
            error => {
                console.log("Something wrong happened", error)
            }
        })
    }
}