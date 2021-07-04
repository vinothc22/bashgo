import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetMaterialComponent } from './asset-material.component';

describe('AssetMaterialComponent', () => {
  let component: AssetMaterialComponent;
  let fixture: ComponentFixture<AssetMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
