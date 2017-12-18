import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { EventsComponent } from './components/events/events.component';
import { EventservicesService } from './services/eventservices.service'

const appRoutes: Routes = [
  { 
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full'
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
    EventsComponent
  ],
  exports: [ RouterModule ],
  imports: [ 
    RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: PreloadAllModules }),
    RouterModule.forChild(appRoutes),
    HttpModule,
    BrowserModule
  ],
  providers: [EventservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
