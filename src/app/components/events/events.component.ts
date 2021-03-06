import { Component, OnInit, Directive } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EventservicesService } from '../../services/eventservices.service';
import { CategoryModel } from '../../model/categoryModel';
import { UsersModel } from '../../model/usersModel';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';
import { Input } from '@angular/core/src/metadata/directives';
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
  image:any;
  eventId;
  public form:FormGroup;
  formData:FormData = new FormData();
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
  uploaded:Array<string> = [
    ];
   onSubmit = function(event){
      event.category_id= this.id;
      event.emailId=this.emailid.toString();
      if(this.eventId!=undefined){
        this.eventservice.fetchEventById(this.eventId).subscribe((eventbyid)=>{
          this.eventbyid=eventbyid; 
          event.eventImage=this.eventbyid.eventImage;    
          this.eventservice.editEvents(event,this.eventId);
        })
         
      }
      else{
        event.eventImage=this.image.name;
        this.formData.append('file', this.image, this.image.name);
        this.formData.append('data',new Blob([JSON.stringify(event)],
        {
            type: "application/json"
        }));
        console.log(this.formData);
  
        this.eventservice.postData(this.formData);
      }
    };
  onItemAdded(event){
    console.log(event);
this.emailid.push(event.display);
   }
   onItemRemoved(event)
   {
     console.log(event);
     const index= this.emptyArray.indexOf(event);
     if (index !== -1) {
      this.emptyArray.splice(index,1);
      this.emailid=this.emptyArray;
      }
   }
   onUploadFinished(event){
    this.image=event.file;
   }
}

