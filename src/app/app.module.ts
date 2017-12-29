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
const appRoutes: Routes = [
  { 
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full'
  },
  {
    path: 'upcomming',
    component: UpcommingComponent
  },
  { 
      path: 'categories',
      component: CategoryComponent
  },
  {
    path:'events',
    children:[
      {
        path: ':id',
        component: EventsComponent
      }
    ]
  }
] 

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    EventsComponent,
    UpcommingComponent
  ],
  exports: [ RouterModule ],
  imports: [ 
    RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: PreloadAllModules }),
    RouterModule.forChild(appRoutes),
    HttpModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,TagInputModule, BrowserAnimationsModule,
    ImageUploadModule.forRoot()
  ],
  providers: [EventservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
