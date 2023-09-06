import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserApartsComponent } from './user-aparts.component';

describe('UserApartsComponent', () => {
  let component: UserApartsComponent;
  let fixture: ComponentFixture<UserApartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserApartsComponent]
    });
    fixture = TestBed.createComponent(UserApartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
