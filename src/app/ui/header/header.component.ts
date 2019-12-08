import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  // public ToggleSidenav = () => {
  //   this.sidenavToggle.emit();
  // }

}
