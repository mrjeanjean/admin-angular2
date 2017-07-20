import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    styleUrls: ['./app.component.css'],
    template: `
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <ul class="nav navbar-nav">
                <li>
                    <a routerLink="/pages" routerLinkActive="active">Home</a>
                </li>
                 <li>
                    <a routerLink="/page/qui-sommes-nous" routerLinkActive="active">Qui sommes-nous</a>
                </li>
                <li>
                    <a routerLink="/template" routerLinkActive="active">Ajouter page</a>
                </li>
            </ul>
      </div>
    </nav>
    <div class="container">
        <router-outlet></router-outlet>
    </div>
    `,
})
export class AppComponent {
}