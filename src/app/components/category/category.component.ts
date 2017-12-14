import { Component, OnInit } from '@angular/core';
import { EventservicesService } from '../../services/eventservices.service';
import { CategoryModel } from '../../model/categoryModel';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  constructor(private eventservice:EventservicesService) { }
categories:CategoryModel[];
  ngOnInit() {
    this.eventservice.fetchCategories().subscribe((categories) =>{
      this.categories= categories;
  });
  }
}
