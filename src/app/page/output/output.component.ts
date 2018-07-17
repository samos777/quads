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
    }

    ngAfterViewInit(): void {
        this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
        console.log("Afterview init");
        console.log(this.form);
        for (let square of this.form.value.myQuads) {
            let A = square.A;
            let B = square.B;
            let C = square.C;
            let D = square.D;
            this.drawQuad(A, B, C, D);
        }


    }

    drawQuad(A, B, C, D) {

        this.context.beginPath();
        this.context.rect(A, B, C, D);
        this.context.closePath();

        this.context.lineWidth = 1;
        this.context.strokeStyle = '#666666';
        this.context.stroke();

        this.context.font = "100% Arial";
        if (C == D) {
            this.context.fillStyle = "purple";
            this.context.fill();
            this.context.fillStyle = "white";
            this.context.fillText(4 * C, A + (D / 2), B + (B / 2));
        } else {
            this.context.fillStyle = "red";
            this.context.fill();
            this.context.fillStyle = "black";
            this.context.fillText(C * D, A + (D / 2), B + (B / 2));
        }
    }
}
