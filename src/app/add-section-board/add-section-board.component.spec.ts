import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionBoardComponent } from './add-section-board.component';

describe('AddSectionBoardComponent', () => {
  let component: AddSectionBoardComponent;
  let fixture: ComponentFixture<AddSectionBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSectionBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectionBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
