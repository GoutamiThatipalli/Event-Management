import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EventservicesService } from '../../services/eventservices.service';
import { CategoryModel } from '../../model/categoryModel';
import {UsersModel} from '../../model/usersModel';
import { forEach } from '@angular/router/src/utils/collection';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  users: UsersModel;
  private id : number;
  category:CategoryModel;
  abc=[];
  emptyArray=[];
  emailid=[];
  form;
  constructor(private route: ActivatedRoute,
    private router: Router,private eventservice:EventservicesService) {
   }
  ngOnInit() {
    this.route.params.subscribe(
      (params : Params) => {
         this.id = params["id"]; 
      }
   );
   this.eventservice.fetchCategoryById(this.id).subscribe((categories) =>{
    this.category= categories;
  });
  this.eventservice.fetchUsers().subscribe((users)=>{
  this.users=users;
  for(let i=0;i<users.length;i++){
    this.abc.push(users[i].email);
  }
});
this.form = new FormGroup({
  eventName : new FormControl("", Validators.required),
  eventDesc : new FormControl("", Validators.required),
 fromDate : new FormControl("", Validators.required),
 toDate : new FormControl("", Validators.required),
});
  }
  onSubmit = function(event){
     event.category_id= this.id;
     event.emailId=this.emailid.toString();
     this.eventservice.postData(event);
     console.log(event);
    };
  onItemAdded(event){
this.emailid.push(event);
   }
}
