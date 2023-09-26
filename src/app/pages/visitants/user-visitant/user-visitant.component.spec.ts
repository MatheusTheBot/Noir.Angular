import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVisitantComponent } from './user-visitant.component';

describe('UserVisitantComponent', () => {
  let component: UserVisitantComponent;
  let fixture: ComponentFixture<UserVisitantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserVisitantComponent]
    });
    fixture = TestBed.createComponent(UserVisitantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
