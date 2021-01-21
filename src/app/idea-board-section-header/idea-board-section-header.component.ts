import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-idea-board-section-header',
  templateUrl: './idea-board-section-header.component.html',
  styleUrls: ['./idea-board-section-header.component.css']
})
export class IdeaBoardSectionHeaderComponent implements OnInit {

  sectionName:string = null;
  constructor() { }

  ngOnInit(): void {
  }

}
