import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { EventsComponent } from './components/category/events/events.component';


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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
