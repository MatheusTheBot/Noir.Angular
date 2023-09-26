import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParcelsComponent } from './admin-parcels.component';

describe('AdminParcelsComponent', () => {
  let component: AdminParcelsComponent;
  let fixture: ComponentFixture<AdminParcelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminParcelsComponent]
    });
    fixture = TestBed.createComponent(AdminParcelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
