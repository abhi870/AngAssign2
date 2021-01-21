import { EventEmitter,Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-section-board',
  templateUrl: './add-section-board.component.html',
  styleUrls: ['./add-section-board.component.css']
})
export class AddSectionBoardComponent implements OnInit {

  sectionName = null;
  @Output() sectionAddEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  addNewSection(name:string){
    this.sectionAddEvent.emit(name);
  }

}
