import { Component,} from '@angular/core';
import { StoreService } from './store.service';


@Component({
  moduleId: module.id,
  selector: 'root',
  template: `<h1>Parent-Level Routing</h1>
    <button (click)="incrementStore()" >Click to ++ store value</button>
    <h3>Store Value = {{store.storeValue}}</h3>
    <nav>
    <a routerLink="/routeA" >RouteA View</a>
    <a routerLink="/routeB">RouteB View</a>
    </nav>
    <br>
    <router-outlet></router-outlet>`,
  styleUrls: ['app.component.css']
  
})
export class AppComponent {


  incrementStore() {this.store.incrementStore();}
  
  constructor(private store: StoreService){}

}
