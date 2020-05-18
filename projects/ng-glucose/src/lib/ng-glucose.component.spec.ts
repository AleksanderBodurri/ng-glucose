import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgGlucoseComponent } from './ng-glucose.component';

describe('NgGlucoseComponent', () => {
  let component: NgGlucoseComponent;
  let fixture: ComponentFixture<NgGlucoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgGlucoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgGlucoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
