import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { routing }  from './app.routing';

import { RouteAComponent } from './route_a/route_a.component';
import { RouteBComponent } from './route_b/route_b.component';
import { StoreService } from './store.service';


@NgModule({
  imports: [BrowserModule, routing],
  declarations: [ AppComponent, RouteAComponent, RouteBComponent ],
  providers: [ StoreService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
