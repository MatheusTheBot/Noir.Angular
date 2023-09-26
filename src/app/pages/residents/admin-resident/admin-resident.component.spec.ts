import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResidentComponent } from './admin-resident.component';

describe('AdminResidentComponent', () => {
  let component: AdminResidentComponent;
  let fixture: ComponentFixture<AdminResidentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminResidentComponent]
    });
    fixture = TestBed.createComponent(AdminResidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
