import { Component, OnInit } from '@angular/core';
import { EventservicesService } from '../../services/eventservices.service';
import { CategoryModel } from '../../model/categoryModel';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor(private eventservice:EventservicesService,private route: ActivatedRoute,
    private router: Router) { }
categories:CategoryModel[];
  ngOnInit() {
    this.eventservice.fetchCategories().subscribe((categories) =>{
      this.categories= categories;
  });
  }
  category(id){
     this.router.navigate(['../events',id], { relativeTo: this.route });
   }
}
