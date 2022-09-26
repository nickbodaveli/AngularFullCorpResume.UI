import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPersonComponent } from './main-person.component';

describe('MainPersonComponent', () => {
  let component: MainPersonComponent;
  let fixture: ComponentFixture<MainPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPersonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
