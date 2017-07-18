import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    styleUrls: ['./app.component.css'],
    template: `
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <dynamic-form></dynamic-form>
            </div>
            <div class="col-md-4">
                <form-actions></form-actions>
            </div>
        </div>
    </div>
    `,
})
export class AppComponent {
}