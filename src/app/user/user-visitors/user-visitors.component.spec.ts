import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVisitorsComponent } from './user-visitors.component';

describe('UserVisitorsComponent', () => {
  let component: UserVisitorsComponent;
  let fixture: ComponentFixture<UserVisitorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserVisitorsComponent]
    });
    fixture = TestBed.createComponent(UserVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
