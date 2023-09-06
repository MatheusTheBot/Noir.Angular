import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartsComponent } from './aparts.component';

describe('ApartsComponent', () => {
  let component: ApartsComponent;
  let fixture: ComponentFixture<ApartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartsComponent]
    });
    fixture = TestBed.createComponent(ApartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
