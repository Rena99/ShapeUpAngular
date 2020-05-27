import { Component, OnInit } from '@angular/core';
import { Members } from '../Classes/members';
import { ActivatedRoute, Router } from '@angular/router';
import { ShapeUpServiceService } from '../shape-up-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  public currentM=new Members();
  model=new Members();
  bool:boolean;
  constructor(private router: Router, private shapeUpService: ShapeUpServiceService) { 
    this.bool=false;
  }
getBool(){
  return this.bool;
}
  getMembers(name:string, password:string){
    debugger;
  this.shapeUpService.getMember(name, password).subscribe(data=>{
    this.currentM=data;
  });
  debugger;
  if(this.currentM!=null){
    debugger;
    this.router.navigate(['./first-page']);
  }
  else{
  this.bool=true;
  }
}
ngOnInit() {
}
}
