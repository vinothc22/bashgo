import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationMaintenanceComponent } from './operation-maintenance.component';

describe('OperationMaintenanceComponent', () => {
  let component: OperationMaintenanceComponent;
  let fixture: ComponentFixture<OperationMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
