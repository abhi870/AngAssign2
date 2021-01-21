import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaBoardItemComponent } from './idea-board-item.component';

describe('IdeaBoardItemComponent', () => {
  let component: IdeaBoardItemComponent;
  let fixture: ComponentFixture<IdeaBoardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaBoardItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaBoardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
