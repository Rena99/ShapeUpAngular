import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Observable, Subscription} from 'rxjs';
import { Members } from 'src/app/Classes/members';
import { Router } from '@angular/router';
import { HttpClient, JsonpInterceptor } from '@angular/common/http';
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
  member=new Members();
  constructor(private router: Router, private newMemberService: ShapeUpServiceService) { 
  }
  getUserName(){
    return this.model.userName;
  }
  addMember(name:string, email:string, password:string)
  {    
    this.member.email=email;
    this.member.userPassword=password;
    this.member.userName=name;
    this.newMemberService.AddMember(this.member).subscribe(data=>
      {
        this.currentM.id=data.id;
        this.currentM.userName=data.userName;
        this.currentM.userPassword=data.userName;
        this.currentM.projects=data.projects;
        this.currentM.accountDate=data.accountDate;
        this.currentM.email=data.email;
        console.log(this.currentM);
        this.router.navigate(['./first-page']);
      },
      error=>{console.log("Add new memeber has an error in service =>" + JSON.stringify(error))}
    );
    
  }
  ngOnInit() {
  }

}
