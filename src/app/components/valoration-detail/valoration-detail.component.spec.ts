import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorationDetailComponent } from './valoration-detail.component';

describe('ValorationDetailComponent', () => {
  let component: ValorationDetailComponent;
  let fixture: ComponentFixture<ValorationDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValorationDetailComponent]
    });
    fixture = TestBed.createComponent(ValorationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
