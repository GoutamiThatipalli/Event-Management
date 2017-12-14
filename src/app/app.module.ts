import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { EventsComponent } from './components/category/events/events.component';
import { EventservicesService } from './services/eventservices.service'

const appRoutes: Routes = [
  { path: 'categories', component: CategoryComponent },
  { path: 'events', component: EventsComponent },
  {
    path: 'categories',
    component: CategoryComponent,
    data: { title: 'Categories' }
  },
  { path: '',
    redirectTo: '/categories',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    EventsComponent
  ],
  imports: [ RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } 
  ),
    HttpModule,
    BrowserModule
  ],
  providers: [EventservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
