import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaBoardSectionGlobalBodyComponent } from './idea-board-section-global-body.component';

describe('IdeaBoardSectionGlobalBodyComponent', () => {
  let component: IdeaBoardSectionGlobalBodyComponent;
  let fixture: ComponentFixture<IdeaBoardSectionGlobalBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdeaBoardSectionGlobalBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeaBoardSectionGlobalBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
