import { Component } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  moduleId: module.id,
  template: `<h1>Now it's the Route B view!</h1>
        <button (click)="incrementStore()" >Click to ++ store value</button>
        <h3>Store Value = {{store.storeValue}}</h3>`,
  styleUrls: ['route_b.component.css']
            
})
export class RouteBComponent {
  
  incrementStore() {this.store.incrementStore();}
  
  constructor(private store: StoreService){}

}
