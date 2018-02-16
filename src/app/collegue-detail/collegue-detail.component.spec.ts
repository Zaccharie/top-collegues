import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegueDetailComponent } from './collegue-detail.component';

describe('CollegueDetailComponent', () => {
  let component: CollegueDetailComponent;
  let fixture: ComponentFixture<CollegueDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegueDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegueDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
