import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {InputComponent} from './page/input/input.component';
import {OutputComponent} from './page/output/output.component';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
    {path: 'input', component: InputComponent},
    {path: 'output', component: OutputComponent},
    { path: '', redirectTo: '/input', pathMatch: 'full' },];

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {
}
