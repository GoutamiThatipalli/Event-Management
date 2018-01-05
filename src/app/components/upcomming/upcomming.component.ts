import { Component, OnInit } from '@angular/core';
import { EventservicesService } from '../../services/eventservices.service';
import {EventsModel} from '../../model/events';

@Component({
  selector: 'app-upcomming',
  templateUrl: './upcomming.component.html',
  styleUrls: ['./upcomming.component.css']
})
export class UpcommingComponent implements OnInit {
    events: EventsModel;
    url:any;
  constructor(private eventservice:EventservicesService) { }
imgUrl:any;
  ngOnInit() {
    this.eventservice.fetchUpcommingEvents().subscribe((events)=>{
      this.events=events;      
  });
}

}
