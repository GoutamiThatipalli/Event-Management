import { Component, OnInit } from '@angular/core';
import { EventservicesService } from '../../services/eventservices.service';
import {EventsModel} from '../../model/events';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { Url } from 'url';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-upcomming',
  templateUrl: './upcomming.component.html',
  styleUrls: ['./upcomming.component.css']
})
export class UpcommingComponent implements OnInit {
    events: EventsModel;
  constructor(
    private eventservice:EventservicesService,private route: ActivatedRoute,
    private router: Router
  ) { }
  imgUrl:any;

  ngOnInit() {
    this.eventservice.fetchUpcommingEvents().subscribe((events)=>{
      this.events=events;      
  });
}
eventedit(id){
  this.router.navigate(['../edit',id], { relativeTo: this.route });

}

}
