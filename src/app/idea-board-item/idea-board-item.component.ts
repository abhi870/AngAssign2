import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-idea-board-item',
  templateUrl: './idea-board-item.component.html',
  styleUrls: ['./idea-board-item.component.css']
})
export class IdeaBoardItemComponent implements OnInit {

  note: string = null;
  
  @Input() left:number;
  @Input() top:number;
  @Input() height:number;
  @Input() width:number;

  constructor() { }

  ngOnInit(): void {
  }
  onCompDrag(event){
    console.log(event);
  }


}
