import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { AngularMaterialModule } from '../ui/angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ],
  exports: [
    HomeComponent,
    ]
})
export class HomeModule { }
