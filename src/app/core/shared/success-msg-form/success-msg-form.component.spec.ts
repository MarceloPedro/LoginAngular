import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessMsgFormComponent } from './success-msg-form.component';

describe('SuccessMsgFormComponent', () => {
  let component: SuccessMsgFormComponent;
  let fixture: ComponentFixture<SuccessMsgFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessMsgFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessMsgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
