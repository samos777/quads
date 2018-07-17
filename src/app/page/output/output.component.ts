import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SquareService} from '../../services/square.service';
import {FormGroup} from '@angular/forms';

@Component({
    selector: 'app-output',
    templateUrl: './output.component.html',
    styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit, AfterViewInit {
    @ViewChild('myCanvas') myCanvas: ElementRef;
    public context: CanvasRenderingContext2D;
    public form: FormGroup;

    constructor(private squareService: SquareService) {
    }

    ngOnInit() {
        this.form = this.squareService.getForm();
        console.log(this.form);
        console.log("output init");
    }

    ngAfterViewInit(): void {
        this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
        for (let square of this.form.get('myQuads.square')) {
            let A = this.form.get('myQuads[square].A');
            console.log(A);
            // let B = this.squareService.squareForm.get('myQuads[square].B').value;
            // let C = this.squareService.squareForm.get('myQuads[square].C').value;
            // let D = this.squareService.squareForm.get('myQuads[square].D').value;
            // this.drawQuad(A, A, A, A);
        }
        // this.drawQuad(200, 200,200, 200); //hard coded

    }

    drawQuad(A, B, C, D) {

        this.context.beginPath();
        this.context.rect(A, B, C, D);
        this.context.closePath();

        this.context.lineWidth = 1;
        this.context.strokeStyle = '#666666';
        this.context.stroke();

        if (A == C) {
            if (A == B && B == C) {
                this.context.fillStyle = "purple";
                this.context.fill();
            } else {
                this.context.fillStyle = "red";
                this.context.fill();
            }
        }

    }
}
