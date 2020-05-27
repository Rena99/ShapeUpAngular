import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import { Members } from 'src/app/Classes/members';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ShapeUpServiceService } from 'src/app/shape-up-service.service';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit {
  http:HttpClient;
  public currentM:Members;
  model=new Members();
  
  constructor(private router: Router, private newMemberService: ShapeUpServiceService) { 
  }
  getUserName(){
    return this.model.UserName;
  }
  addMember(name:string, email:string, password:string)
  {
    debugger;
    this.newMemberService.getperson(name, password, email).subscribe(data=>
      {
        debugger;
        this.currentM=data;
        debugger;
      }
    );
    debugger;
    this.router.navigate(['./first-page']);
  }
  ngOnInit() {
  }

}
