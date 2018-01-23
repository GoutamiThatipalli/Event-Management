import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpRequest } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { ok } from 'assert';
@Injectable()
export class EventservicesService {

  constructor(private route: ActivatedRoute,
    private router: Router,private http:Http) { }
  fetchCategories(){
    
    return this.http.get('http://localhost:8080/events/getAllCategories',{"withCredentials":true})
      .map(res => res.json())
  }
  fetchUsers(){
    
    return this.http.get('http://localhost:8080/events/getAllUsers')
      .map(res => res.json())
  }
  fetchCategoryById(id){
    
    return this.http.get('http://localhost:8080/events/getCategoryById/'+id)
      .map(res => res.json())
  }
  fetchEventById(id){
    
    return this.http.get('http://localhost:8080/events/getEventById/'+id)
      .map(res => res.json())
  }
  fetchEvents(){
    return this.http.get('http://localhost:8080/events/getAllEvents')
    .map(res => res.json())
  }
  fetchUpcommingEvents(){
    return this.http.get('http://localhost:8080/events/upcomming')
    .map(res => res.json())
  }
  postData(event){
    return this.http.post('http://localhost:8080/events/addevents',event)
    .subscribe(
      res => {
        console.log(res);
        if (res["_body"]) { 
          this.router.navigate(['./upcomming']);
        }
      },
      err => {
        console.log("Error occured");
      }
    );
  }
  editEvents(event,id){
      return this.http.put('http://localhost:8080/events/updatevents/'+id,event)
      .subscribe(
        res => {
          if (res.ok==true) { 
            this.router.navigate(['./upcomming']);
          }
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }

}
