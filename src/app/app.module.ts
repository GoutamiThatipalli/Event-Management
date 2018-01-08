import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { EventsComponent } from './components/events/events.component';
import { EventservicesService } from './services/eventservices.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ImageUploadModule } from "angular2-image-upload";
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpcommingComponent } from './components/upcomming/upcomming.component'; 
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import {DataTableModule} from "angular2-datatable";
import {NgxPaginationModule} from 'ngx-pagination';
import { LoginComponent } from './components/login/login.component';
import {CanActivateAuthGuard} from './can-activate.authguard';
import {AuthenticationService} from '../app/services/authentication.service'
const appRoutes: Routes = [
  { 
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'upcomming',
    component: UpcommingComponent,
   // canActivate: [CanActivateAuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    //canActivate: [CanActivateAuthGuard]
  },
  { 
      path: 'categories',
      component: CategoryComponent
     // canActivate: [CanActivateAuthGuard]
  },
  {
    path:'events',
    children:[
      {
        path: ':id',
        component: EventsComponent,
      //  canActivate: [CanActivateAuthGuard]
      }
    ]
  }
] 

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    EventsComponent,
    UpcommingComponent,
    UsersComponent,
    LoginComponent
  ],
  exports: [ RouterModule ],
  imports: [ 
    RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: PreloadAllModules }),
    RouterModule.forChild(appRoutes),
    HttpModule,
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    DataTableModule,
    ReactiveFormsModule,TagInputModule, BrowserAnimationsModule,
    ImageUploadModule.forRoot()
  ],
  providers: [EventservicesService,CanActivateAuthGuard,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
