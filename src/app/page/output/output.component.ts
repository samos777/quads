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

    ngOnInit(): void {
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

    drawQuad(A, B, C, D): void {
        let startPoint = 0;

        this.context.beginPath();
        this.context.moveTo(startPoint, startPoint);
        this.context.lineTo((startPoint + A), startPoint);
        this.context.lineTo((startPoint + A), (startPoint + B));
        this.context.lineTo((startPoint + A - C), (startPoint + B));
        this.context.lineTo((startPoint + A - C), (startPoint + B - D));

        this.context.closePath();

        this.context.lineWidth = 1;
        this.context.strokeStyle = '#666666';
        this.context.stroke();

        this.context.font = "100% Arial";
        if (A == C && B == D) {
            if (B == C && A == D) {
                let hekef = 4 * C;
                this.context.fillStyle = "rgba(128,0,128,0.3) ";
                this.context.fill();
                this.context.fillStyle = "black";
                this.context.fillText(hekef.toString(), startPoint + (A / 2), startPoint + (A / 2));
            } else {
                let shetah = C * D;
                this.context.fillStyle = "rgba(255,0,0,0.3)";
                this.context.fill();
                this.context.fillStyle = "black";
                this.context.fillText(shetah.toString(), startPoint + (A / 2), startPoint + (B / 2));
            }
        }
    }
}
