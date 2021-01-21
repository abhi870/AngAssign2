import { Component, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() addSectionEvent = new EventEmitter();
  
  sectionName = null;
  onHit(name: string) {
    this.addSectionEvent.emit(name);
  }
  addNew(event){
    console.log(event);
    this.sectionName = event;
  }
}
