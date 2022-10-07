import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecifyEducationComponent } from './specify-education.component';

describe('SpecifyEducationComponent', () => {
  let component: SpecifyEducationComponent;
  let fixture: ComponentFixture<SpecifyEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecifyEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecifyEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
