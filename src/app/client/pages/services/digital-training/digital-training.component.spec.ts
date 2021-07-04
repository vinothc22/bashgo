import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalTrainingComponent } from './digital-training.component';

describe('DigitalTrainingComponent', () => {
  let component: DigitalTrainingComponent;
  let fixture: ComponentFixture<DigitalTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
