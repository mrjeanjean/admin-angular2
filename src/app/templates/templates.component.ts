import { Component } from '@angular/core';

@Component({
    template: `
        <div class="row">
            <div class="col-md-8">
                <dynamic-form></dynamic-form>
            </div>
            <div class="col-md-3 col-md-offset-1">
                <form-actions></form-actions>
            </div>
        </div>
    `
})
export class TemplatesComponent{

}