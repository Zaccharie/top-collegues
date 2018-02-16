import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegueTableauComponent } from './collegue-tableau.component';

describe('CollegueTableauComponent', () => {
  let component: CollegueTableauComponent;
  let fixture: ComponentFixture<CollegueTableauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegueTableauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegueTableauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
