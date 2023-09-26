import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVisitantComponent } from './admin-visitant.component';

describe('AdminVisitantComponent', () => {
  let component: AdminVisitantComponent;
  let fixture: ComponentFixture<AdminVisitantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminVisitantComponent]
    });
    fixture = TestBed.createComponent(AdminVisitantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
