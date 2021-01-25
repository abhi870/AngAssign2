import { Component, Output, ViewChild, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';
import * as EventEmitter from 'events';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor(private renderer: Renderer2) {

  }
  @Output() addSectionEvent = new EventEmitter();

  @ViewChild("boardBody") boardBody: ElementRef
  sections = [];
  notes = [];
  counter = 0;
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
  ngAfterViewInit(): void {
    console.log(this.boardBody);
  }

  addNote(event) {
    this.counter++;
    this.notes.push("add note" + this.counter.toString());
    console.log(this.notes);

  }
  closeNote(event) {
    console.log(event);
    this.notes = this.notes.filter(ele => {
      if (ele === event[0])
        ele = event[1];
      return ele;
    });
    console.log(this.notes);
  }

}
