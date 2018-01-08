import { Component, OnInit } from '@angular/core';
import { EventservicesService } from '../../services/eventservices.service';
import {EventsModel} from '../../model/events';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { Url } from 'url';

@Component({
  selector: 'app-upcomming',
  templateUrl: './upcomming.component.html',
  styleUrls: ['./upcomming.component.css']
})
export class UpcommingComponent implements OnInit {
    events: EventsModel;
    public url="file:///home/goutamit/Pictures/updated.png";
    public imgUrlVal:Url;

  constructor(
    private eventservice:EventservicesService,
    private sanitizer: DomSanitizer
  ) { }
  imgUrl:any;

  ngOnInit() {
    this.imgUrlVal = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    this.eventservice.fetchUpcommingEvents().subscribe((events)=>{
      this.events=events;      
  });
}

}
