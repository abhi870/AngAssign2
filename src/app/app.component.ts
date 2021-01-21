import { Component, Output } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() addSectionEvent = new EventEmitter();
  
  sections = [];
  onHit(name: string) {
    this.addSectionEvent.emit(name);
  }
  addNew(event){
    this.sections.push(event);
  }
}
