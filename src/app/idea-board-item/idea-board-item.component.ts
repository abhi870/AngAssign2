import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-idea-board-item',
  templateUrl: './idea-board-item.component.html',
  styleUrls: ['./idea-board-item.component.css']
})
export class IdeaBoardItemComponent implements OnInit {

  @Input() note: string = null;
  changedNote = null;

  @Output() closeEmitter = new EventEmitter();
  @Input() left: number;
  @Input() top: number;
  @Input() height: number;
  @Input() width: number;

  constructor() { }

  ngOnInit(): void {
  }


  onClose(event) {
    let responseArr = [];
    responseArr.push(this.note);
    responseArr.push(this.changedNote);
    this.closeEmitter.emit(responseArr);
  }
}
