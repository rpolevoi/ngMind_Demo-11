import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  moduleId: module.id,
  selector: 'root',
  template: `
             <h1>The following number is a parent component property</h1>
             <h1>{{parentProp}}</h1>
             <button (click)="child.childIncrement()">increment child only</button>
             <button (click)="parentIncrement()">increment parent (syncs child)</button>
             <br><br>
             <app-child-component #child [childProp]="parentProp"></app-child-component>
             `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  
  parentProp = 567;
  
  parentIncrement() { this.parentProp++}

  
}
