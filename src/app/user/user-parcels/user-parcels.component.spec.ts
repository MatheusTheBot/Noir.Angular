import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserParcelsComponent } from './user-parcels.component';

describe('UserParcelsComponent', () => {
  let component: UserParcelsComponent;
  let fixture: ComponentFixture<UserParcelsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserParcelsComponent]
    });
    fixture = TestBed.createComponent(UserParcelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
