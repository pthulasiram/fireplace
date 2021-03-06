import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {MaterialModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";

import {AuthGuard} from '../auth/auth.module';

import {AddComponent} from './add.component';
import {DataService} from "../common/data.service";

const routes: Routes = [
    {path: 'add', component: AddComponent, canActivate: [AuthGuard]}
];

@NgModule({
    declarations: [
        AddComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        FlexLayoutModule,
        RouterModule.forChild(routes)
    ],
    providers: [
        DataService
    ]
})

export class AddModule {
}

export {DataService};
