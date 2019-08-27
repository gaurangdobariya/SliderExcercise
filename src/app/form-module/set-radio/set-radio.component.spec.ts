import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRadioComponent } from './set-radio.component';

describe('SetRadioComponent', () => {
  let component: SetRadioComponent;
  let fixture: ComponentFixture<SetRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
