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
  onHit(name: string) {
    this.addSectionEvent.emit(name);
  }
  addNew(event){
    this.sections.push(event);
  }
  onMouseDown(event){
    console.log(event);
    console.log(event.target.parentElement.id);
  }

  drop(event: CdkDragDrop<any[]>){
    moveItemInArray(this.sections, event.previousIndex, event.currentIndex);
  }
}
