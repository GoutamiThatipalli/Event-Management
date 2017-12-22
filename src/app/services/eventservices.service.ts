import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class EventservicesService {

  constructor(private http:Http) { }
  fetchCategories(){
    
    return this.http.get('http://localhost:8080/events/getAllCategories')
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
