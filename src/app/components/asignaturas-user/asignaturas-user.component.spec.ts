import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturasUserComponent } from './asignaturas-user.component';

describe('AsignaturasUserComponent', () => {
  let component: AsignaturasUserComponent;
  let fixture: ComponentFixture<AsignaturasUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsignaturasUserComponent]
    });
    fixture = TestBed.createComponent(AsignaturasUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
