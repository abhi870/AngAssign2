import { Component, Output } from '@angular/core';
import * as EventEmitter from 'events';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Output() addSectionEvent = new EventEmitter();


  sections = [];
  notes = [];
  onHit(name: string) {
    this.addSectionEvent.emit(name);
  }
  addNew(event) {
    if (!this.sections.includes(event))
      this.sections.push(event);
  }
  onMouseDown(event) {
    console.log(event);
    console.log(event.target.parentElement.id);
  }


}
