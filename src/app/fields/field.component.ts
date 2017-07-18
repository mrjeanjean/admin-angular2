import { FormGroup } from '@angular/forms';

export abstract class FieldComponent {

    public parentGroup: FormGroup;
    public config:any;
}