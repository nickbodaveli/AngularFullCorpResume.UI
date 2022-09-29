import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonProfileViewComponent } from './person-profile-view.component';

describe('PersonProfileViewComponent', () => {
  let component: PersonProfileViewComponent;
  let fixture: ComponentFixture<PersonProfileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonProfileViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonProfileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
