import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppprimarymethodComponent } from './appprimarymethod.component';

describe('AppprimarymethodComponent', () => {
  let component: AppprimarymethodComponent;
  let fixture: ComponentFixture<AppprimarymethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppprimarymethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppprimarymethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
