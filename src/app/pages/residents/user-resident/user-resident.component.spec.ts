import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResidentComponent } from './user-resident.component';

describe('UserResidentComponent', () => {
  let component: UserResidentComponent;
  let fixture: ComponentFixture<UserResidentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserResidentComponent]
    });
    fixture = TestBed.createComponent(UserResidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
