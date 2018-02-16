import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegueCarousselComponent } from './collegue-caroussel.component';

describe('CollegueCarousselComponent', () => {
  let component: CollegueCarousselComponent;
  let fixture: ComponentFixture<CollegueCarousselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegueCarousselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegueCarousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
