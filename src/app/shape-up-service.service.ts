import { Members } from './Classes/members';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpParams, HttpClient, HttpHeaders, HttpHandler} from '@angular/common/http';
import { Response } from 'selenium-webdriver/http';
import { promise } from 'protractor';
import { resolve } from 'path';

@Injectable({
  providedIn: 'root'
})
export class ShapeUpServiceService {

  constructor(private http:HttpClient) { 
  }
  member:Members;
  getMember(name:string, password:string){
    debugger;
    return this.http.get<Members>('http://localhost:5000/api/shapeup/members/'+name+'/'+password).pipe(); 
    
  } 
  getperson(name:string, password:string, email:string):Observable<Members>
  {
    debugger;
    return this.http.post<Members>('http://localhost:5000/api/shapeup/members/'+name+'/'+password+'/'+email, '').pipe();
  }
}

