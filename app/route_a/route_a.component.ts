import { Component } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  moduleId: module.id,
  template: `<h1>Route A view (default)</h1>
          <button (click)="incrementStore()" >Click to ++ store value</button>
        <h3>Store Value = {{store.storeValue}}</h3>`,
  styleUrls: ['route_a.component.css']
})
export class RouteAComponent {
  
  incrementStore() {this.store.incrementStore();}
  
  constructor(private store: StoreService){}

}
