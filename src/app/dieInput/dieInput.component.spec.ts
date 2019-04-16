import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DieInputComponent } from './dieInput.component';

describe('DieInputComponent', () => {
  let component: DieInputComponent;
  let fixture: ComponentFixture<DieInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DieInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DieInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
