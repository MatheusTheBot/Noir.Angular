import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResidentsComponent } from './admin-residents.component';

describe('AdminResidentsComponent', () => {
  let component: AdminResidentsComponent;
  let fixture: ComponentFixture<AdminResidentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminResidentsComponent]
    });
    fixture = TestBed.createComponent(AdminResidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
