import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { EventservicesService } from '../../services/eventservices.service';
import { CategoryModel } from '../../model/categoryModel';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  private id : number;
  category:CategoryModel;
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
  }

}
