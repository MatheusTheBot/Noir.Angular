import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResidentsComponent } from './user-residents.component';

describe('UserResidentsComponent', () => {
  let component: UserResidentsComponent;
  let fixture: ComponentFixture<UserResidentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserResidentsComponent]
    });
    fixture = TestBed.createComponent(UserResidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
