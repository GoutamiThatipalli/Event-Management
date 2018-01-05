import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpRequest } from '@angular/common/http';
@Injectable()
export class EventservicesService {

  constructor(private http:Http) { }
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
      },
      err => {
        console.log("Error occured");
      }
    );
  }

}
