import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminApartsComponent } from './admin-aparts.component';

describe('AdminApartsComponent', () => {
  let component: AdminApartsComponent;
  let fixture: ComponentFixture<AdminApartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminApartsComponent]
    });
    fixture = TestBed.createComponent(AdminApartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
