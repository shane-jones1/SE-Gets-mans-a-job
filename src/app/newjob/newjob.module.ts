import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewjobComponent } from './newjob.component';
import { AngularMaterialModule } from '../ui/angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [NewjobComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ]
})
export class NewjobModule { }
