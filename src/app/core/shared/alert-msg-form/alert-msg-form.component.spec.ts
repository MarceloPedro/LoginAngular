import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertMsgFormComponent } from './alert-msg-form.component';

describe('AlertMsgFormComponent', () => {
  let component: AlertMsgFormComponent;
  let fixture: ComponentFixture<AlertMsgFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertMsgFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertMsgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
