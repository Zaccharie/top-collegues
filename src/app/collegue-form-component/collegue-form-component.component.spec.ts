import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegueFormComponent } from './collegue-form-component.component';

describe('CollegueFormComponentComponent', () => {
  let component: CollegueFormComponent;
  let fixture: ComponentFixture<CollegueFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegueFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
