import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedmethodComponent } from './selectedmethod.component';

describe('SelectedmethodComponent', () => {
  let component: SelectedmethodComponent;
  let fixture: ComponentFixture<SelectedmethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedmethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedmethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
