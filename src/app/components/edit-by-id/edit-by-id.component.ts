import { Component, OnInit, Directive, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EventservicesService } from '../../services/eventservices.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EventsModel } from '../../model/events';
import { EventsComponent } from '../events/events.component';
import { ViewChildren } from '@angular/core/src/metadata/di';

@Component({
  selector: 'app-edit-by-id',
  templateUrl: './edit-by-id.component.html',
  styleUrls: ['./edit-by-id.component.css']
})
export class EditByIdComponent implements OnInit {

  constructor( private eventservice:EventservicesService,private route: ActivatedRoute,
    private router: Router) { }
    form;
    private id : number;
    events: EventsModel;
    pic;
    image:any;
    @ViewChild(EventsComponent) child: EventsComponent;
    
  ngOnInit() {
    this.route.params.subscribe(
      (params : Params) => {
         this.id = params["eventid"]; 
      }
   );
   this.eventservice.fetchEventById(this.id).subscribe((events)=>{
    this.events=events;  
});   
console.log(this.child);
  }
  ngAfterViewChecked(){
    setTimeout(() => {
      if(this.child){
        (<FormControl>this.child.form.controls['eventName'])
      .setValue(this.events.eventName, { onlySelf: true });
      (<FormControl>this.child.form.controls['eventDesc'])
      .setValue(this.events.eventDesc, { onlySelf: true });
      (<FormControl>this.child.form.controls['fromDate'])
      .setValue(this.events.fromDate, { onlySelf: true });
      (<FormControl>this.child.form.controls['toDate'])
      .setValue(this.events.toDate, { onlySelf: true });    
      this.child.emptyArray=this.events.emailId.split(",");
     // this.child.uploaded=['assets/img/fileupload/'+this.events.eventImage]; 
    }
    }, 1);
  }
  update(event){
    this.eventservice.editEvents(event);
  }

}
