import { Members } from './Classes/members';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpParams, HttpClient, HttpHeaders, HttpHandler} from '@angular/common/http';
import { Response } from 'selenium-webdriver/http';
import { promise } from 'protractor';
import { resolve } from 'path';
import { Shapes } from './Classes/Shapes';

@Injectable({
  providedIn: 'root'
})
export class ShapeUpServiceService {

  constructor(private http:HttpClient) { 
  }
  GetMember(name:string, password:string){
    return this.http.get<Members>("http://localhost:5000/api/shapeup/members/"+name+"/"+password).pipe();
  }
  GetShapes(id:number){
    return this.http.get<Array<Shapes>>("http://localhost:5000/api/shapeup/shapes/"+id).pipe();
  }
  AddMember(member):Observable<Members>
  {
    //let m=JSON.stringify(member);
    let headers = new HttpHeaders({'content-type':'application/json'});
    // headers.append('content-type','application/json');
    let options = {headers:headers};
    return this.http.post<Members>("http://localhost:5000/api/shapeup/members", member, options);
  }
  ChangeMemberPassword(member)
  {
    let m=JSON.stringify(member);
    let headers = new HttpHeaders();
    headers.append('content-type','application/json');
    let options = {headers:headers};
    return this.http.post<Members>("http://localhost:5000/api/shapeup/members", m, options).pipe();
  }
}

