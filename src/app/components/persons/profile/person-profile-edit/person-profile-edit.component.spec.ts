import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonProfileEditComponent } from './person-profile-edit.component';

describe('PersonProfileEditComponent', () => {
  let component: PersonProfileEditComponent;
  let fixture: ComponentFixture<PersonProfileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonProfileEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
