import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegueClassiqueComponent } from './collegue-classique.component';

describe('CollegueClassiqueComponent', () => {
  let component: CollegueClassiqueComponent;
  let fixture: ComponentFixture<CollegueClassiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegueClassiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegueClassiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
