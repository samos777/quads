import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SquareService} from '../../services/square.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
    makeQuadForm: FormGroup;
    isEmpty: boolean = true;


    constructor(private squareService: SquareService,
                private route: Router) {
    }


    ngOnInit(): void {

        this.makeQuadForm = new FormGroup({
            'myQuads': new FormArray([]),
        });
    }


    onAddQuad(): void {
        const control = new FormGroup({
            'A': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(800)]),
            'B': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(800)]),
            'C': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(800)]),
            'D': new FormControl(null, [Validators.required, Validators.min(1), Validators.max(800)]),
        }, [Validators.required]);
        (<FormArray>this.makeQuadForm.get('myQuads')).push(control);
        this.isEmpty = false;
    }

    onSubmit(): void {
        this.squareService.setForm(this.makeQuadForm);
        this.route.navigate(['/output'])

    }

}
