import { Component, OnInit } from '@angular/core';
import { EventservicesService } from '../../services/eventservices.service';
import { UsersModel } from '../../model/usersModel';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  data: any;
  users: UsersModel;
  constructor(private eventservice:EventservicesService) { }

  ngOnInit() {
    this.eventservice.fetchUsers().subscribe((users)=>{
      this.users=users; 
      this.data=users;     
    });
  }
}
