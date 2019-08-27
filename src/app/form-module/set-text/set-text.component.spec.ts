import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTextComponent } from './set-text.component';

describe('SetTextComponent', () => {
  let component: SetTextComponent;
  let fixture: ComponentFixture<SetTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
