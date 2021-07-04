import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManpowerOutsourcingComponent } from './manpower-outsourcing.component';

describe('ManpowerOutsourcingComponent', () => {
  let component: ManpowerOutsourcingComponent;
  let fixture: ComponentFixture<ManpowerOutsourcingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManpowerOutsourcingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManpowerOutsourcingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
