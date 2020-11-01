import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackblitzSampleComponent } from './stackblitz-sample.component';

describe('StackblitzSampleComponent', () => {
  let component: StackblitzSampleComponent;
  let fixture: ComponentFixture<StackblitzSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackblitzSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackblitzSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
