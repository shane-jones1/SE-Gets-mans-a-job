import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AngularMaterialModule } from '../ui/angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    BrowserAnimationsModule
  ]
})
export class LoginModule { }
