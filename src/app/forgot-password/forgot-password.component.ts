import { Component, OnInit } from '@angular/core';
import { Members } from '../Classes/members';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }
  chg=new Members();

  ngOnInit() {
  }

}
