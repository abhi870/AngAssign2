import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaBoardSectionHeaderComponent } from './idea-board-section-header.component';

describe('IdeaBoardSectionHeaderComponent', () => {
  let component: IdeaBoardSectionHeaderComponent;
  let fixture: ComponentFixture<IdeaBoardSectionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaBoardSectionHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaBoardSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
