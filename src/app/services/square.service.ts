import {Injectable} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class SquareService {
    private squareForm: FormGroup;

    constructor() {

    }

    getForm() {
        return this.squareForm;
    }

    setForm(form) {
        this.squareForm = form;
    }
}
