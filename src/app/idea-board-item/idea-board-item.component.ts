import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idea-board-item',
  templateUrl: './idea-board-item.component.html',
  styleUrls: ['./idea-board-item.component.css']
})
export class IdeaBoardItemComponent implements OnInit {

  note: string = null;
  
  constructor() { }

  ngOnInit(): void {
  }

}
