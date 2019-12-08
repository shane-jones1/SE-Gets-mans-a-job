import { Component, OnInit } from '@angular/core';



export interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  options: Option[] = [
    {value: 'employee', viewValue: 'Emplyee'},
    {value: 'employer', viewValue: 'Employer'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
