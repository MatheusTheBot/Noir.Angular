import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentCommunitySpacesComponent } from './rent-community-spaces.component';

describe('RentCommunitySpacesComponent', () => {
  let component: RentCommunitySpacesComponent;
  let fixture: ComponentFixture<RentCommunitySpacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentCommunitySpacesComponent]
    });
    fixture = TestBed.createComponent(RentCommunitySpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
