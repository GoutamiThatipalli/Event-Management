import { Component, OnInit } from '@angular/core';
import { EventservicesService } from '../../services/eventservices.service';
import { EventsModel } from '../../model/events';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  data: any;
  events: EventsModel;
  constructor(private eventservice:EventservicesService) { }

  ngOnInit() {
    this.eventservice.fetchEvents().subscribe(
      (events)=>{
        this.events=events;
        this.data=events;  
      }
    );

}
}
