import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchlocaleComponent } from './switchlocale.component';

describe('SwitchlocaleComponent', () => {
  let component: SwitchlocaleComponent;
  let fixture: ComponentFixture<SwitchlocaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchlocaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchlocaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
